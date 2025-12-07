import { HeaderEmp } from "../HeaderEmp";
import { HealthChart } from "../../../components/HealthChart";

type Props = {
  onLogout: () => void;
};

export function HealthPage({ onLogout }: Props) {
  return (
    <div className="health-page-wapper">
      <HeaderEmp onLogout={onLogout} />
      <HealthChart />
    </div>
  );
}

export default HealthPage;