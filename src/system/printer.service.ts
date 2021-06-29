import { IpcMain, IpcMainInvokeEvent } from 'electron';
// import {
//   printer as ThermalPrinter,
//   types as PrinterTypes,
// } from 'node-thermal-printer';
import driver from '@thiagoelg/node-printer';

const start = (ipcMain: IpcMain) => {
  ipcMain.handle(
    'thermal-printer-raw',
    (event: IpcMainInvokeEvent, str: string): Promise<any> => {
      return driver.printDirect({
        data: str,
        type: 'RAW',
        printer: 'Printer_POS-80',
        success(jobID) {
          console.log(`sent to printer with ID: ${jobID}`);
        },
        error(err) {
          console.log(err);
        },
      });
    }
  );
};

export default start;
