// ag-grid-enterprise v21.1.1
import { ExcelOOXMLTemplate, ExcelAlignment, ExcelProtection } from 'ag-grid-community';
declare const xfFactory: ExcelOOXMLTemplate;
export default xfFactory;
export interface Xf {
    alignment?: ExcelAlignment;
    borderId: number;
    fillId: number;
    fontId: number;
    numFmtId: number;
    xfId?: number;
    protection?: ExcelProtection;
}
