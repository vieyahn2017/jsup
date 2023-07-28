## list
html

```html

<my-header title="环境一览" [isShowCreateButton]="true"></my-header>
<div>通用配置：
</div>

<ul class="list">
  <li *ngFor="let contacti of contacts; trackBy: trackFunc">
    <app-list-item [contactItem]="contacti" (routerNavigate)="routerNavigate(contacti.id)"></app-list-item>
  </li>
</ul>

<my-footer></my-footer>

```

ts

```ts

  trackFunc = (index, item) => {
    // 改变这里查看页面dom刷新状况
    return index;
    // return 'xxx';
    // return item.id;
    // return item.name;
  }

```

## item
html
```html
  <!--<img src="/assets/images/appIcon.svg"> -->
  <div class="contact-info" (click)="goDetail(contactItem.id)">
    <label class="contact-name">CSP后台：{{ contactItem.cspHostIp }}</label>
    <span class="contact-tel">CSP前端：{{ contactItem.csp }}</span>
    <!--<span class="contact-tel">IVDWEB：{{ contactItem.ivd  }}</span>-->

    <label class="contact-tel">
      业务IP：{{ contactItem.ivdNginxIp }}&nbsp; &nbsp;
      iBMC：{{ contactItem.ibmcIp }}&nbsp; &nbsp;
      平台：{{ contactItem.platform }} &nbsp; &nbsp;
      <span>状态：{{ contactItem.status == 0 ? "正常": "不正常" }} </span> &nbsp; &nbsp;
      模块功能：{{ contactItem.modules }}</label>

    <!--<div *ngIf="contactItem.id == 1">-->
      <!--<span class="contact-tel">软件包地址：{{ contactItem.ivdPackageAddress  }}</span>-->
    <!--</div>-->

    <i class="contact-to-detail"></i>
  </div>

```
