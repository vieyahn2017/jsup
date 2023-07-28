
ts

```ts
export class DetailComponent implements OnInit, OnDestroy {
  contact_id: string;  // 之前是number?
  detail: any = {};
  contacts: any = {};
  private sub: any;


  getById(id: string) {
    this._constactService.getContactById(id).subscribe(data => {
      this.detail = data;
    });
  }

// 增加的
  openSrcFile(url: string) {
    // 测试失败
    window.open(url, '_blank');
  }

  cpFilePath(e: any) {
    const selection = window.getSelection();
    const range = document.createRange();
    const $target = e.target as HTMLElement;
    range.selectNodeContents($target);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
  }

  cpEnvInfo() {
    const selection = window.getSelection();
    const range = document.createRange();
    const info = document.getElementById('envInfo');
    range.selectNodeContents(info);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
  }

```

html
```html
<div class="detail-contain">
  <div class="header-detail">
    <a [routerLink]=" ['']" class="back-to-list">
      <i class="icon-back"></i>
      所有环境
    </a>
     <a class="edit" (click)="editContact()">编辑</a>
    <div class="name-and-icon" (click)="cpEnvInfo()">
      <img src="/assets/images/Iverson.jpg">
      <span class="contact-name">
        {{ detail.name }}
        <i [ngClass]="{collect: detail.collection == 0, collected: detail.collection == 1}" (click)="collectTheContact()"></i>
      </span>
    </div>
  </div>
  <ul class="detail-info">
    <li>
      <p>平台类型：{{ detail.platform }}</p>
    </li>
    <div id="envInfo">
    <li>
      <p>CSP后台：{{ detail.cspHostIp }}</p>
      <p>ssh用户：{{ detail.cspHostSshUser }}/{{ detail.cspHostSshUserPwd}}</p>
      <p>root用户：{{ detail.cspHostRootUser }}/{{ detail.cspHostRootUserPwd}}</p>
      <p *ngIf="detail.cspHostIp2Node">纳管节点：{{ detail.cspHostIp2Node }}</p>
    </li>
    <li>
      <p>CSP前端：<a href="{{detail.csp}}" target="_blank"> {{ detail.csp }}</a> </p>
      <p>用户密码：{{ detail.cspFloatUser }}/{{ detail.cspFloatUserPwd}} </p>
    </li>
    </div>
    <li>
      <pGW业务IP：{{ detail.ivdNginxIp }} </p>
      <p>超管用户：{{ detail.ivdSuperUser }} / 密码：{{ detail.ivdSuperPwd}} </p>
      <!--<p>超管用户：{{ detail.ivdSuperUser }} / 密码：{{ detail.ivdSuperPwd}} / 初始密码：{{ detail.ivdSuperDefaultPwd}} </p>-->
      <p>WEB：<a href="{{detail.ivdwebMock}}" target="_blank"> {{ detail.ivdwebMock }}</a> </p>
    </li>
    <li>
      <p>软件包：</p>
      <p>{{ detail.ivdPackageName }}</p>
      <p>分支：{{ detail.ivdPackageBranch }} </p>
      <p> 软件包地址【点击复制】：  <a (click)="cpFilePath($event)">{{ detail.ivdPackageAddress }} </a> </p>
      <!--<p>出包时间：{{ detail.ivdPackageCreatedTime }} </p>-->
      <!--<p>安装时间：{{ detail.ivdPackageInstallTime }} </p>-->
      <!--<p>状态：{{ detail.status  =='0' ? '正常': '异常' }} </p>-->
    </li>
    <li>
      <p>模块功能：{{ detail.modules }}</p>
      <p>开发责任人：{{ detail.users }}</p>
    </li>
    <li>
      <p>iBMC1：<a href="https://{{detail.ibmcIp}}" target="_blank"> {{ detail.ibmcIp }}</a>  &nbsp;&nbsp; 型号 {{ detail.ibmcType }} </p>
      <p *ngIf="detail.ibmcIp2">iBMC2：<a href="https://{{detail.ibmcIp2}}" target="_blank"> {{ detail.ibmcIp2 }}</a>  &nbsp;&nbsp; 型号 {{ detail.ibmcType2 }} </p>
      <p *ngIf="detail.ibmcIp3">iBMC2：<a href="https://{{detail.ibmcIp3}}" target="_blank"> {{ detail.ibmcIp3 }}</a>  &nbsp;&nbsp; 型号 {{ detail.ibmcType3 }} </p>
      <p>用户：{{ detail.ibmcUser }}  密码：{{ detail.ibmcPwd }}</p>
    </li>
    <li>
      <div *ngIf="detail.statusInfo">
        <p>当前状态信息：</p>
        <p>{{ detail.statusInfo }} </p>
      </div>
    </li>
  </ul>

</div>

```
