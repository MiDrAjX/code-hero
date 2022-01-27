import md5 from 'md5';
import api from './api';

const publicKey = '8309093bf2dfe4705a39661f8e9da75a';
const privateKey = '179c2c9d374119ee24546295fa9c98af38c7df60';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export default class Characters {
  static async getCharacters(offset) {
    return api
      .get(
        `/characters?orderBy=name&limit=4&offset=${offset}&ts=${time}&apikey=${publicKey}&hash=${hash}`,
      )
      .then(async response => {
        if (response.status) {
          return {
            data: response.data.data,
            ok: true,
          };
        }
        return {
          ok: false,
          message: response.status || 'Erro',
        };
      })
      .catch(error => ({
        ok: false,
        message: error.response.status,
        code: error.response.code,
      }));
  }
  static async showCharacter(name, offset) {
    return api
      .get(
        `/characters?nameStartsWith=${name}&orderBy=name&limit=4&offset=${offset}&ts=${time}&apikey=${publicKey}&hash=${hash}`,
      )
      .then(async response => {
        if (response.status) {
          return {
            data: response.data,
            ok: true,
          };
        }
        return {
          ok: false,
          message: response.status || 'Erro',
        };
      })
      .catch(error => ({
        ok: false,
        message: error.response.status,
        code: error.response.code,
      }));
  }
}
