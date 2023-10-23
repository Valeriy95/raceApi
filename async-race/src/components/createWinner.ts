import { IWinnerData } from "../types/types";

export async function createWinner(data: IWinnerData): Promise<IWinnerData> {

  try {
    const response: Response = await fetch('https://async-race-api-qdmc.vercel.app/winners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const createdWinnerCar: IWinnerData = await response.json();
    return createdWinnerCar;
  } catch (error) {
    throw new Error(`Request failed: ${error}`);
  }
}