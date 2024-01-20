export type AccountType = {
  accountId: string;
  email: string;
  authToken: string;
  creationDate: string
}

export type ProfileType = {
  profileId: string;
  country: string;
  marketplace: string;
}

export type CampaignType = {
  campaignId: string;
  clicks: number;
  cost: number;
  date: string
}

export type dataType = "accounts" | "profiles" | "campaigns";

