import OSS from 'ali-oss';
import { getAuth } from '@/utils/index';

// 传入文件地址, 通过oss配置返回新地址hooks
export function useAliOssSystem() {
  function getRealImgUrl(str: string) {
    if (!str) return null;

    const data: any = JSON.parse(getAuth('oss_system') as string);
    const client = new OSS({
      // Bucket所在地域
      region: 'oss-cn-shanghai',
      // 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
      accessKeyId: data!.access_key_id,
      accessKeySecret: data!.access_key_secret,
      // 从STS服务获取的安全令牌（SecurityToken）。
      stsToken: data!.security_token,
      // Bucket名称。
      bucket: 'blesouci',
    });
    // 文件URL的有效时长默认为1800秒，即30分钟。
    const url = client.signatureUrl(str);
    return url;
  }

  return {
    getRealImgUrl,
  };
}
