import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { DataService } from "../../../shared/services/data.service";

@Component({
    template: ''
})
export abstract class ListComponent implements OnInit, OnDestroy {
    abstract listData: any[];
    listSubscription: Subscription = new Subscription;

    constructor(public dataService: DataService) { }

    ngOnInit(): void {
        this.getList();
    }

    ngOnDestroy(): void {
        this.listSubscription.unsubscribe();
    }

    getList() {
        this.listSubscription = this.fetchData().subscribe((response) => {
            this.listData = response.map((item: any) =>
                this.convertToInterface(item));
        });
    }

    abstract fetchData(): Observable<any>;
    abstract convertToInterface(item: any): any;
}
