import axios from 'axios';

export async function isTokenValid(token: string): Promise<boolean> {
  try {
    const response = await axios.get(
      `http://localhost:3000/auth/is-token-valid/${token}`
    );

    return response.data;
  } catch (error) {
    return false;
  }
}
