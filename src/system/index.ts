import { IpcMain } from 'electron';
import printerService from './printer.service';

const startServices = (ipcMain: IpcMain) => {
  printerService(ipcMain);
};
export default startServices;
