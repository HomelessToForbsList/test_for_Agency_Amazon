import type {AccountType, ProfileType, CampaignType} from './types'

export const AccountData: AccountType[] = [
  {
    acccountId: 'accId1',
    email: 'email1@gmail.com',
    authToken: 'tokenA',
    creationDate: '17-01-2024',
  },
  {
    acccountId: 'accId2',
    email: 'email2@gmail.com',
    authToken: 'tokenB',
    creationDate: '17-01-2024',
  },
  {
    acccountId: 'accId3',
    email: 'email3@gmail.com',
    authToken: 'tokenC',
    creationDate: '18-01-2024',
  },
  {
    acccountId: 'accId4',
    email: 'email4@gmail.com',
    authToken: 'tokenD',
    creationDate: '18-01-2024',
  },
  {
    acccountId: 'accId5',
    email: 'email5@gmail.com',
    authToken: 'tokenE',
    creationDate: '19-01-2024',
  }
]

export const ProfileData :ProfileType[] = [
  {
    profileId: 'profileId1',
    country: 'USA',
    marketplace: 'Marketplace A'
  },
  {
    profileId: 'profileId2',
    country: 'Canada',
    marketplace: 'Marketplace B'
  },
  {
    profileId: 'profileId3',
    country: 'Mexico',
    marketplace: 'Marketplace C'
  },
  {
    profileId: 'profileId4',
    country: 'France',
    marketplace: 'Marketplace D'
  },
  {
    profileId: 'profileId5',
    country: 'New Zealand',
    marketplace: 'Marketplace E'
  }
]

export const CampaignData :CampaignType[] = [
  {
    campaignId: 'campaignId1',
    clicks: 18,
    cost: 45.50,
    date: '17-01-2024'
  },
  {
    campaignId: 'campaignId2',
    clicks: 25,
    cost: 80,
    date: '18-01-2024'
  },
  {
    campaignId: 'campaignId3',
    clicks: 8,
    cost: 124,
    date: '19-01-2024'
  },
  {
    campaignId: 'campaignId4',
    clicks: 46,
    cost: 26.90,
    date: '20-01-2024'
  },
  {
    campaignId: 'campaignId5',
    clicks: 77,
    cost: 15.50,
    date: '21-01-2024'
  }
]