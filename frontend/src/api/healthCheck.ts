import type { HealthRecordBody, GetHealthRecord } from "../types";

const API_BASE_URL = "http://localhost:8080";

export async function resisterHealthRecord(data: HealthRecordBody) {
  const res = await fetch(`${API_BASE_URL}/api/healthCheck/resister`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.error("[health record error] status:", res.status);
    let errorMessage = "体調記録の登録に失敗しました";

    const errorBody = await res.json();
    if (errorBody && typeof errorBody.message === "string") {
      errorMessage = errorBody.message;
    }
    throw new Error(errorMessage);
  }

  const responseData = await res.json();
  return responseData;
}

export async function getHealthRecords(): Promise<GetHealthRecord[]> {
  const res = await fetch(`${API_BASE_URL}/api/healthCheck/getHealthRecords`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if(!res.ok) {
    console.error("[fetch records error] status:", res.status);
    let errorMessage = "体調記録データの取得に失敗しました";

    const errorBody = await res.json();
    if (errorBody && typeof errorBody.message === "string") {
      errorMessage = errorBody.message;
    }

    throw new Error(errorMessage);
  }

  const data: GetHealthRecord[] = await res.json();
  return data;
}
