import { HeaderOwner } from "../HeaderOwner";
import { OwnerAlertDash } from "./OwnerAlertDash";
import { OwnerHealthDash } from "./OwnerHealthDash";
import "./style/OwnerDash.css";

type Props = {
  onLogout: () => void;
};

function OwnerPage({ onLogout }: Props) {
  return (
    <div className="owner-wapper">
      <HeaderOwner onLogout={onLogout} />
      <div className="ownerDash-container">
        <OwnerAlertDash />
        <OwnerHealthDash />
      </div>
    </div>
  );
}

export default OwnerPage;
