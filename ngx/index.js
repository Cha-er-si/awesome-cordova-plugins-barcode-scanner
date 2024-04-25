import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var BarcodeScanner = /** @class */ (function (_super) {
    __extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE',
        };
        return _this;
    }
    BarcodeScanner.prototype.scan = function (options) { return cordova(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.prototype.encode = function (type, data) { return cordova(this, "encode", {}, arguments); };
    BarcodeScanner.prototype.startCameraScan = function () { return cordova(this, "startCameraScan", {}, arguments); };
    BarcodeScanner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarcodeScanner, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    BarcodeScanner.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarcodeScanner });
    BarcodeScanner.pluginName = "BarcodeScanner";
    BarcodeScanner.plugin = "phonegap-plugin-barcodescanner";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/phonegap/phonegap-plugin-barcodescanner";
    BarcodeScanner.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows"];
    BarcodeScanner = __decorate([], BarcodeScanner);
    return BarcodeScanner;
}(AwesomeCordovaNativePlugin));
export { BarcodeScanner };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarcodeScanner, decorators: [{
            type: Injectable
        }], propDecorators: { scan: [], encode: [], startCameraScan: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFyY29kZS1zY2FubmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFrSHhELGtDQUEwQjs7O1FBQzVELFlBQU0sR0FLRjtZQUNGLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7OztJQVdGLDZCQUFJLGFBQUMsT0FBK0I7SUFhcEMsK0JBQU0sYUFBQyxJQUFZLEVBQUUsSUFBUztJQUs5Qix3Q0FBZTtnSEF4Q0osY0FBYztvSEFBZCxjQUFjOzs7Ozs7SUFBZCxjQUFjLGtCQUFkLGNBQWM7eUJBbkgzQjtFQW1Ib0MsMEJBQTBCO1NBQWpELGNBQWM7NEZBQWQsY0FBYztrQkFEMUIsVUFBVTs4QkF1QlQsSUFBSSxNQWFKLE1BQU0sTUFLTixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU2Nhbm5lck9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFByZWZlciBmcm9udCBjYW1lcmEuIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXHJcbiAgICovXHJcbiAgcHJlZmVyRnJvbnRDYW1lcmE/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBTaG93IGZsaXAgY2FtZXJhIGJ1dHRvbi4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cclxuICAgKi9cclxuICBzaG93RmxpcENhbWVyYUJ1dHRvbj86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgdG9yY2ggYnV0dG9uLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxyXG4gICAqL1xyXG4gIHNob3dUb3JjaEJ1dHRvbj86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgYW5pbWF0aW9ucy4gU3VwcG9ydGVkIG9uIGlPUyBvbmx5LlxyXG4gICAqL1xyXG4gIGRpc2FibGVBbmltYXRpb25zPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZSBzdWNjZXNzIGJlZXAuIFN1cHBvcnRlZCBvbiBpT1Mgb25seS5cclxuICAgKi9cclxuICBkaXNhYmxlU3VjY2Vzc0JlZXA/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9tcHQgdGV4dC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cclxuICAgKi9cclxuICBwcm9tcHQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdHMgc2VwYXJhdGVkIGJ5IGNvbW1hcy4gRGVmYXVsdHMgdG8gYWxsIGZvcm1hdHMgZXhjZXB0IGBQREZfNDE3YCBhbmQgYFJTU19FWFBBTkRFRGAuXHJcbiAgICovXHJcbiAgZm9ybWF0cz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogT3JpZW50YXRpb24uIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuIENhbiBiZSBzZXQgdG8gYHBvcnRyYWl0YCBvciBgbGFuZHNjYXBlYC4gRGVmYXVsdHMgdG8gbm9uZSBzbyB0aGUgdXNlciBjYW4gcm90YXRlIHRoZSBwaG9uZSBhbmQgcGljayBhbiBvcmllbnRhdGlvbi5cclxuICAgKi9cclxuICBvcmllbnRhdGlvbj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogTGF1bmNoIHdpdGggdGhlIHRvcmNoIHN3aXRjaGVkIG9uIChpZiBhdmFpbGFibGUpLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxyXG4gICAqL1xyXG4gIHRvcmNoT24/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBTYXZlIHNjYW4gaGlzdG9yeS4gRGVmYXVsdHMgdG8gYGZhbHNlYC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cclxuICAgKi9cclxuICBzYXZlSGlzdG9yeT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXkgc2Nhbm5lZCB0ZXh0IGZvciBYIG1zLiAwIHN1cHByZXNzZXMgaXQgZW50aXJlbHksIGRlZmF1bHQgMTUwMC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cclxuICAgKi9cclxuICByZXN1bHREaXNwbGF5RHVyYXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5SZXN1bHQge1xyXG4gIGZvcm1hdDpcclxuICAgIHwgJ1FSX0NPREUnXHJcbiAgICB8ICdEQVRBX01BVFJJWCdcclxuICAgIHwgJ1VQQ19FJ1xyXG4gICAgfCAnVVBDX0EnXHJcbiAgICB8ICdFQU5fOCdcclxuICAgIHwgJ0VBTl8xMydcclxuICAgIHwgJ0NPREVfMTI4J1xyXG4gICAgfCAnQ09ERV8zOSdcclxuICAgIHwgJ0NPREVfOTMnXHJcbiAgICB8ICdDT0RBQkFSJ1xyXG4gICAgfCAnSVRGJ1xyXG4gICAgfCAnUlNTMTQnXHJcbiAgICB8ICdSU1NfRVhQQU5ERUQnXHJcbiAgICB8ICdQREZfNDE3J1xyXG4gICAgfCAnQVpURUMnXHJcbiAgICB8ICdNU0knO1xyXG4gIGNhbmNlbGxlZDogYm9vbGVhbjtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCYXJjb2RlIFNjYW5uZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBCYXJjb2RlIFNjYW5uZXIgUGx1Z2luIG9wZW5zIGEgY2FtZXJhIHZpZXcgYW5kIGF1dG9tYXRpY2FsbHkgc2NhbnMgYSBiYXJjb2RlLCByZXR1cm5pbmcgdGhlIGRhdGEgYmFjayB0byB5b3UuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhcmNvZGVTY2FubmVyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyKS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmFyY29kZS1zY2FubmVyL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuYmFyY29kZVNjYW5uZXIuc2NhbigpLnRoZW4oYmFyY29kZURhdGEgPT4ge1xyXG4gKiAgY29uc29sZS5sb2coJ0JhcmNvZGUgZGF0YScsIGJhcmNvZGVEYXRhKTtcclxuICogfSkuY2F0Y2goZXJyID0+IHtcclxuICogXHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnIpO1xyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEJhcmNvZGVTY2FubmVyT3B0aW9uc1xyXG4gKiBCYXJjb2RlU2NhblJlc3VsdFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JhcmNvZGVTY2FubmVyJyxcclxuICBwbHVnaW46ICdwaG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXInLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5iYXJjb2RlU2Nhbm5lcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9waG9uZWdhcC9waG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0JsYWNrQmVycnkgMTAnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYXJjb2RlU2Nhbm5lciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBFbmNvZGU6IHtcclxuICAgIFRFWFRfVFlQRTogc3RyaW5nO1xyXG4gICAgRU1BSUxfVFlQRTogc3RyaW5nO1xyXG4gICAgUEhPTkVfVFlQRTogc3RyaW5nO1xyXG4gICAgU01TX1RZUEU6IHN0cmluZztcclxuICB9ID0ge1xyXG4gICAgVEVYVF9UWVBFOiAnVEVYVF9UWVBFJyxcclxuICAgIEVNQUlMX1RZUEU6ICdFTUFJTF9UWVBFJyxcclxuICAgIFBIT05FX1RZUEU6ICdQSE9ORV9UWVBFJyxcclxuICAgIFNNU19UWVBFOiAnU01TX1RZUEUnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW4gdGhlIGJhcmNvZGUgc2Nhbm5lci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QmFyY29kZVNjYW5uZXJPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9uYWwgb3B0aW9ucyB0byBwYXNzIHRvIHRoZSBzY2FubmVyXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHNjYW5uZXIgZGF0YSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIHNjYW4ob3B0aW9ucz86IEJhcmNvZGVTY2FubmVyT3B0aW9ucyk6IFByb21pc2U8QmFyY29kZVNjYW5SZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuY29kZXMgZGF0YSBpbnRvIGEgYmFyY29kZS5cclxuICAgKiBOT1RFOiBub3Qgd2VsbCBzdXBwb3J0ZWQgb24gQW5kcm9pZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZSBvZiBlbmNvZGluZ1xyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIERhdGEgdG8gZW5jb2RlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZW5jb2RlKHR5cGU6IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydENhbWVyYVNjYW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19