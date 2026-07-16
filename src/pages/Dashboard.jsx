import "./Dashboard.css";

function Dashboard() {
  return (
    <>
          <h1>FitTrack Dashboard</h1>
    <div className="dashboard">
      <div className="stat-card">
        <h3>Toplam Antrenman</h3>
        <p>0</p>
      </div>
      <div className="stat-card">
        <h3>Toplam Set</h3>
        <p>0</p>
      </div>
      <div className="stat-card">
        <h3>Bu Hafta</h3>
        <p>0</p>
      </div>
      <div className="stat-card">
        <h3>Son Antrenman</h3>
        <p>-</p>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
