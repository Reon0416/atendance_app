import { HeaderEmp } from "../components/HeaderEmp";
import { HealthChart } from "../components/HealthChart";

type Props = {
  onLogout: () => void;
};

export function HealthRecord({ onLogout }: Props) {
  return (
    <div className="health-page-wapper">
      <HeaderEmp onLogout={onLogout} />
      <HealthChart />
    </div>
  );
}

export default HealthRecord;