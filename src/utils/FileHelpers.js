import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { createHash } from 'crypto';

export const stringToHash = string => {
  const hash = createHash('sha256');
  hash.update(string);
  return hash.digest('hex');
};

export const writeFile = async (fileName, data) => {
  const response = await Filesystem.writeFile({
    path: `secrets/${stringToHash(fileName)}`,
    data,
    directory: Directory.Cache,
    recursive: true,
    encoding: Encoding.UTF8,
  });

  console.log('🚀 ~ FileSystem: WriteFile: OK: ', response);
};

export const readFile = async fileName => {
  const contents = await Filesystem.readFile({
    path: `secrets/${stringToHash(fileName)}`,
    directory: Directory.Cache,
    encoding: Encoding.UTF8,
  });

  console.log('🚀 ~ FileSystem: ReadFile: OK: ', contents);
  return contents.data;
};
