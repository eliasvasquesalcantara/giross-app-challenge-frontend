import { Cep } from '../types/cep';

export function isCepArray(arr: any): arr is Cep[] {
  if (!Array.isArray(arr)) return false;

  const allPropertiesExist = arr.every((item) => {
    return (
      item?.id != null &&
      item?.numeroCEP != null &&
      item?.UF != null &&
      item?.logradouro != null &&
      item?.bairro != null &&
      item?.cidade != null &&
      item?.latitude != null &&
      item?.longitude != null
    );
  });

  if (!allPropertiesExist) {
    console.log(`Nem todas propriedades estão no objeto`);
    return false;
  }

  const allPropertiesHaveTheCorrectType = arr.every((item) => {
    return (
      typeof item?.id === 'number' &&
      typeof item?.numeroCEP === 'string' &&
      typeof item?.UF === 'string' &&
      typeof item?.logradouro === 'string' &&
      typeof item?.bairro === 'string' &&
      typeof item?.cidade === 'string' &&
      typeof item?.latitude === 'number' &&
      typeof item?.longitude === 'number'
    );
  });

  if (!allPropertiesHaveTheCorrectType) {
    console.log(`Nem todas propriedades tem o tipo correto`);
    return false;
  }

  return true;
}
