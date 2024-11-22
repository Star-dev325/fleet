export interface ProductionLayoutProps {
  children: React.ReactNode;
}

export interface ProductionContentProps {
  children: React.ReactNode;
}

export interface ProcessHistoryProps {
  type: "gold" | "copper";
  work: string;
  pocket: string;
  startTime: Date;
  endTime: Date;
}
