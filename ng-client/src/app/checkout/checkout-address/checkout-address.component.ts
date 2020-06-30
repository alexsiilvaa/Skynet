import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/account/account.service';

@Component({
    selector: 'app-checkout-address',
    templateUrl: './checkout-address.component.html',
    styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {
    @Input() checkoutForm: FormGroup;

    constructor(private accountService: AccountService, private toastr: ToastrService) { }

    ngOnInit() {
    }

    updateUserAddress() {
        const address = this.checkoutForm.get('addressForm').value;
        this.accountService.updateUserAddress(address)
            .subscribe(() => {
                this.toastr.success('Address saved');
            }, error => console.log(error));
    }

}
