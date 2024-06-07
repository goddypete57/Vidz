const endpoints = {
  // baseUrl: 'https://staging-auth.smcdao.com',
  baseUrl: 'https://staging-api.smcdao.com',
  baseUrlAUth: 'https://staging-auth.smcdao.com',
  baseUrl2: 'https://staging.chat.smcdao.com',
  login: '/auth/login',
  register: '/auth/register',
  resend: '/auth/login/token',
  verify: '/auth/verify-account',
  forgotPassword: '/auth/forgot-password',
  resetPassword: '/auth/reset-password',
  getplaces: '/auth/places',
  searchplaces: '/auth/places/search',
  conversation: '/conversations/create-one-on-one',
  getOneAndOneConversation: '/conversations/one-on-one/',
  getChat: '/conversations/',
  stats: '/users/stats',
  profile: '/admin/users/details/',
  industry: '/users/industries',
  users: '/admin/users',
  updateUser: '/users/',
  ws: 'wss://staging.chat.smcdao.com/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTE0YmFjMjZmOGJlMTk1ZDg0NDQ4YmIiLCJlbWFpbCI6ImV6cmFpbWVvZm9uK3Rlc3QxQGdtYWlsLmNvbSIsImlzcyI6IlNNQy1EQU8iLCJpYXQiOjE2OTU4NTczOTksImV4cCI6MTY5NjQ2MjE5OX0.uRRfPeej_Yk4qe-xc4nujMIsKfPteZnPIg2Ud0me-nA/',
  wsc: 'ws://staging-socket.smcdao.com',
  country: '/users/countries',
  exchanges: '/users/supportedExchanges',
  createGroup: '/groups/',
  UpdateProfileImaeg: '/users/profile-picture/',
  pointRanking: '/points/ranking',
  communityActivities: '/admin/activities',
  searchChat: '/conversations/search/',
  // userActivities: 'users/activities',
  sendPoint: '/users/send',
  getBadge: '/badges/users/',
  getCommunityBadge: '/badges/community',
  getGroupMember: 'groups',
  online: '/users/online/',
  groupOnline: '/users/online/group/',
  renameGroup: '/groups/',
  delectChat: '/conversations/',
  clearonversation: '/conversations/clear/',
  deleteChat: '/conversations/',
  allGroups: '/groups/',


  // Library
  libraryCategories: '/library/categories',
  libraryVideos: '/library/videos',
  libraryArticle: '/library/articles',
  listOfCategories: '/library/categories/list',
  videoCategories: '/library/videos/categories/',
  oneVideo: '/library/videos/',
  ArticleCtegories: '/library/articles/categories',
  getOneAsset: '/library/videos/getAsset/',
  Comment: '/library/videos/',
  audios: '/library/audios',
  AudioCategories: '/library/audios/categories',
  libraryAudio: '/library/audios',
};

export function getUserConversationsUrl(userid) {
  return `${endpoints.baseUrl}/conversations/${userid}`;
}

export function getGroups(GroupId) {
  return `${endpoints.baseUrl}/groups/${GroupId}/members`;
}

export function getRequest(GroupId) {
  return `${endpoints.baseUrl}/groups/${GroupId}/requests`;
}
export function sendRequest(GroupId) {
  return `${endpoints.baseUrl}/groups/${GroupId}/request`;
}

export function updateRequest(GroupId) {
  return `${endpoints.baseUrl}/groups/${GroupId}/updateRequest`;
}

export function getOneAndOneConversation(userId, isGroup, receiverId) {
  return `${endpoints.baseUrl}/conversations/one-on-one/${userId}?receiverId=${receiverId}&isGroup=${isGroup}`;
}

export function updateProfile(userId) {
  return `${endpoints.baseUrl}/users/${userId}/profile-picture/`;
}
export function updateicon(groupId) {
  return `${endpoints.baseUrl}/groups/${groupId}/updateIcon`;
}

export function updateBanner(groupId) {
  return `${endpoints.baseUrl}/groups/${groupId}/updateBanner`;
}
// export function userActivities(userId) {
//   return `${endpoints.baseUrl}/users/${userId}/activities/`;
// }

export default endpoints;
