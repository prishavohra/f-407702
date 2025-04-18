import React, { useEffect, useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

type AlertData = {
  name: string;
  camera_id: string;
  timestamp: string;
  p_id: string;
};

export default function AlertList() {
  const [alerts, setAlerts] = useState<AlertData[]>([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch(" http://127.0.0.1:5011/api/alerts");
        const data = await response.json();
        console.log("Fetched Alerts:", data);
        setAlerts(data);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    };

    fetchAlerts();

    const interval = setInterval(fetchAlerts, 5000); // Optional: auto-refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4 text-white">
      {alerts.length === 0 ? (
        <p>No alerts available.</p>
      ) : (
        alerts.map((alert, index) => (
          <Alert key={`${alert.p_id}-${index}`}>
            <AlertTitle>{`Camera: ${alert.camera_id}`}</AlertTitle>
            <AlertDescription>{`Time: ${new Date(alert.timestamp).toLocaleString()}`}</AlertDescription>
            <AlertDescription>{`Name: ${alert.name}`}</AlertDescription>
          </Alert>
        ))
      )}
    </div>
  );
}
