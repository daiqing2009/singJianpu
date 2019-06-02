import { onGet, onPost } from '@/utils/request';

export const getMember = ({ openid, unionid }) => onGet(`api/user/${unionid}/${openid}`);

export const saveMember = (extraData, userInfo) => onPost('api/wechat/member', {
  ...extraData,
  ...userInfo,
});

export const getSession = code => onGet('api/mini/code', { code: code });

export const getUnionId = (
  sessionKey,
  encryptedData,
  iv,
) => onPost('api/mini/decrypt', {
  sessionKey,
  encryptedData,
  iv,
});
