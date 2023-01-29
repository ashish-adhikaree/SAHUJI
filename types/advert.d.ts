const Status = {
    paused = "paused",
    scheduled = "scheduled",
    ongoing = "ongoing",
    completed = "completed",
  } as const

  const Type = {
    banner = "banner",
    search = "search",
    home = "home",
  } as const
  
  export type TStatus = typeof Status[keyof typeof Status];
  export type TType = typeof Type[keyof typeof Type];

  
  export interface Advertisment {
    aid: number;
    title: string,
    type: TType,
    expiresAt: number;
    billed: number;
    budget: number;
    status: TStatus
  }
  
  export interface AdTableProps {
    data: {
      headings: string[];
      rows: Advertisment[];
    };
  }
  