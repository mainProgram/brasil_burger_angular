'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">snapface documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-359c27305749429c40efa0a168ddb45733cb22791591821b0096585bb70fa380c73eed9d9f612b58b3db784c722c8fc9fc5b78960c760486d9c3f0e95933cb7f"' : 'data-target="#xs-components-links-module-AdminModule-359c27305749429c40efa0a168ddb45733cb22791591821b0096585bb70fa380c73eed9d9f612b58b3db784c722c8fc9fc5b78960c760486d9c3f0e95933cb7f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-359c27305749429c40efa0a168ddb45733cb22791591821b0096585bb70fa380c73eed9d9f612b58b3db784c722c8fc9fc5b78960c760486d9c3f0e95933cb7f"' :
                                            'id="xs-components-links-module-AdminModule-359c27305749429c40efa0a168ddb45733cb22791591821b0096585bb70fa380c73eed9d9f612b58b3db784c722c8fc9fc5b78960c760486d9c3f0e95933cb7f"' }>
                                            <li class="link">
                                                <a href="components/AdminHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d116fb63133a8a9db4acdacb84fd7b603169a7c39b61db62848a0820485c54779ab52b899e82ba4459fbbc741233a1e6c6aa6c9af8b37c4095cb55a2805c5abd"' : 'data-target="#xs-components-links-module-AppModule-d116fb63133a8a9db4acdacb84fd7b603169a7c39b61db62848a0820485c54779ab52b899e82ba4459fbbc741233a1e6c6aa6c9af8b37c4095cb55a2805c5abd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d116fb63133a8a9db4acdacb84fd7b603169a7c39b61db62848a0820485c54779ab52b899e82ba4459fbbc741233a1e6c6aa6c9af8b37c4095cb55a2805c5abd"' :
                                            'id="xs-components-links-module-AppModule-d116fb63133a8a9db4acdacb84fd7b603169a7c39b61db62848a0820485c54779ab52b899e82ba4459fbbc741233a1e6c6aa6c9af8b37c4095cb55a2805c5abd"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-a7a4f39045daefa5f3f4e83c7b22e7b1a4641eea9fcea9a47978b0363f417977dfc8e727b041b2747212f84205892017d9aa79ee6e33d0fba49669556ca60425"' : 'data-target="#xs-components-links-module-AuthModule-a7a4f39045daefa5f3f4e83c7b22e7b1a4641eea9fcea9a47978b0363f417977dfc8e727b041b2747212f84205892017d9aa79ee6e33d0fba49669556ca60425"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-a7a4f39045daefa5f3f4e83c7b22e7b1a4641eea9fcea9a47978b0363f417977dfc8e727b041b2747212f84205892017d9aa79ee6e33d0fba49669556ca60425"' :
                                            'id="xs-components-links-module-AuthModule-a7a4f39045daefa5f3f4e83c7b22e7b1a4641eea9fcea9a47978b0363f417977dfc8e727b041b2747212f84205892017d9aa79ee6e33d0fba49669556ca60425"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientModule-1d50d6692a6f0229aed8e2cf4741eb0d74f95142b076949f2251b0a14c33e7c7bef6ae6982817d454bf5159b5db08df6742856c4320ec3b0049f0895bb754558"' : 'data-target="#xs-components-links-module-ClientModule-1d50d6692a6f0229aed8e2cf4741eb0d74f95142b076949f2251b0a14c33e7c7bef6ae6982817d454bf5159b5db08df6742856c4320ec3b0049f0895bb754558"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientModule-1d50d6692a6f0229aed8e2cf4741eb0d74f95142b076949f2251b0a14c33e7c7bef6ae6982817d454bf5159b5db08df6742856c4320ec3b0049f0895bb754558"' :
                                            'id="xs-components-links-module-ClientModule-1d50d6692a6f0229aed8e2cf4741eb0d74f95142b076949f2251b0a14c33e7c7bef6ae6982817d454bf5159b5db08df6742856c4320ec3b0049f0895bb754558"' }>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CatalogueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatalogueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CatalogueDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatalogueDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommandeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PanierComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ClientModule-1d50d6692a6f0229aed8e2cf4741eb0d74f95142b076949f2251b0a14c33e7c7bef6ae6982817d454bf5159b5db08df6742856c4320ec3b0049f0895bb754558"' : 'data-target="#xs-pipes-links-module-ClientModule-1d50d6692a6f0229aed8e2cf4741eb0d74f95142b076949f2251b0a14c33e7c7bef6ae6982817d454bf5159b5db08df6742856c4320ec3b0049f0895bb754558"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ClientModule-1d50d6692a6f0229aed8e2cf4741eb0d74f95142b076949f2251b0a14c33e7c7bef6ae6982817d454bf5159b5db08df6742856c4320ec3b0049f0895bb754558"' :
                                            'id="xs-pipes-links-module-ClientModule-1d50d6692a6f0229aed8e2cf4741eb0d74f95142b076949f2251b0a14c33e7c7bef6ae6982817d454bf5159b5db08df6742856c4320ec3b0049f0895bb754558"' }>
                                            <li class="link">
                                                <a href="pipes/TailleBoissonPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TailleBoissonPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientRoutingModule.html" data-type="entity-link" >ClientRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommandeModule.html" data-type="entity-link" >CommandeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CommandeModule-9997fd3ed5c6d8b1d7ac90a20f755b69e45c2f705db14822ec7e18d037f03a975269cde87adf7b235b81dfd5fdfc0f6a74f23c286798418c157882d6d4b57184"' : 'data-target="#xs-components-links-module-CommandeModule-9997fd3ed5c6d8b1d7ac90a20f755b69e45c2f705db14822ec7e18d037f03a975269cde87adf7b235b81dfd5fdfc0f6a74f23c286798418c157882d6d4b57184"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CommandeModule-9997fd3ed5c6d8b1d7ac90a20f755b69e45c2f705db14822ec7e18d037f03a975269cde87adf7b235b81dfd5fdfc0f6a74f23c286798418c157882d6d4b57184"' :
                                            'id="xs-components-links-module-CommandeModule-9997fd3ed5c6d8b1d7ac90a20f755b69e45c2f705db14822ec7e18d037f03a975269cde87adf7b235b81dfd5fdfc0f6a74f23c286798418c157882d6d4b57184"' }>
                                            <li class="link">
                                                <a href="components/CommandeDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandeDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommandesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommandesRoutingModule.html" data-type="entity-link" >CommandesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-41b2ab444d8df985327456caeb8ce76f0d360ae894bc6d7c3e8c303b5c7617eece3320f773de0d90b52934bd969a1a231f24a38c489bdb0ed0f73a7a13e263ca"' : 'data-target="#xs-components-links-module-LayoutModule-41b2ab444d8df985327456caeb8ce76f0d360ae894bc6d7c3e8c303b5c7617eece3320f773de0d90b52934bd969a1a231f24a38c489bdb0ed0f73a7a13e263ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-41b2ab444d8df985327456caeb8ce76f0d360ae894bc6d7c3e8c303b5c7617eece3320f773de0d90b52934bd969a1a231f24a38c489bdb0ed0f73a7a13e263ca"' :
                                            'id="xs-components-links-module-LayoutModule-41b2ab444d8df985327456caeb8ce76f0d360ae894bc6d7c3e8c303b5c7617eece3320f773de0d90b52934bd969a1a231f24a38c489bdb0ed0f73a7a13e263ca"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-LayoutModule-41b2ab444d8df985327456caeb8ce76f0d360ae894bc6d7c3e8c303b5c7617eece3320f773de0d90b52934bd969a1a231f24a38c489bdb0ed0f73a7a13e263ca"' : 'data-target="#xs-directives-links-module-LayoutModule-41b2ab444d8df985327456caeb8ce76f0d360ae894bc6d7c3e8c303b5c7617eece3320f773de0d90b52934bd969a1a231f24a38c489bdb0ed0f73a7a13e263ca"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-LayoutModule-41b2ab444d8df985327456caeb8ce76f0d360ae894bc6d7c3e8c303b5c7617eece3320f773de0d90b52934bd969a1a231f24a38c489bdb0ed0f73a7a13e263ca"' :
                                        'id="xs-directives-links-module-LayoutModule-41b2ab444d8df985327456caeb8ce76f0d360ae894bc6d7c3e8c303b5c7617eece3320f773de0d90b52934bd969a1a231f24a38c489bdb0ed0f73a7a13e263ca"' }>
                                        <li class="link">
                                            <a href="directives/HasRoleDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HasRoleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LivraisonsModule.html" data-type="entity-link" >LivraisonsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LivraisonsModule-03e852ed9f1bfc7a6ff30c47b78fb16851fa6c948d2cbf76b6d935eaac6727ca8eabf6d8384ccf285f8db0e6a08424320f60b2e917c52acfb30954547965a056"' : 'data-target="#xs-components-links-module-LivraisonsModule-03e852ed9f1bfc7a6ff30c47b78fb16851fa6c948d2cbf76b6d935eaac6727ca8eabf6d8384ccf285f8db0e6a08424320f60b2e917c52acfb30954547965a056"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LivraisonsModule-03e852ed9f1bfc7a6ff30c47b78fb16851fa6c948d2cbf76b6d935eaac6727ca8eabf6d8384ccf285f8db0e6a08424320f60b2e917c52acfb30954547965a056"' :
                                            'id="xs-components-links-module-LivraisonsModule-03e852ed9f1bfc7a6ff30c47b78fb16851fa6c948d2cbf76b6d935eaac6727ca8eabf6d8384ccf285f8db0e6a08424320f60b2e917c52acfb30954547965a056"' }>
                                            <li class="link">
                                                <a href="components/LivraisonCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivraisonCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivraisonDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivraisonDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivraisonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivraisonsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LivraisonsRoutingModule.html" data-type="entity-link" >LivraisonsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LivreursModule.html" data-type="entity-link" >LivreursModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LivreursModule-d55ff4671a681d310890b78ba749e0c4329b4276ad84d5b153b5b8c39dc6115c3241e284eed68954a25bea87345c9787e4f517faba0cfec9abe9a18cdd91cacb"' : 'data-target="#xs-components-links-module-LivreursModule-d55ff4671a681d310890b78ba749e0c4329b4276ad84d5b153b5b8c39dc6115c3241e284eed68954a25bea87345c9787e4f517faba0cfec9abe9a18cdd91cacb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LivreursModule-d55ff4671a681d310890b78ba749e0c4329b4276ad84d5b153b5b8c39dc6115c3241e284eed68954a25bea87345c9787e4f517faba0cfec9abe9a18cdd91cacb"' :
                                            'id="xs-components-links-module-LivreursModule-d55ff4671a681d310890b78ba749e0c4329b4276ad84d5b153b5b8c39dc6115c3241e284eed68954a25bea87345c9787e4f517faba0cfec9abe9a18cdd91cacb"' }>
                                            <li class="link">
                                                <a href="components/LivreurCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivreurCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivreurDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivreurDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivreursComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivreursComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LivreursRoutingModule.html" data-type="entity-link" >LivreursRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProduitsModule.html" data-type="entity-link" >ProduitsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProduitsModule-20e24135e24292a367d70fc453865b02f2454d0ad9a196290776445ec228a0d7603ba0213d3073796e4476881956b3b990f91b0982e809355ad22534d5464840"' : 'data-target="#xs-components-links-module-ProduitsModule-20e24135e24292a367d70fc453865b02f2454d0ad9a196290776445ec228a0d7603ba0213d3073796e4476881956b3b990f91b0982e809355ad22534d5464840"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProduitsModule-20e24135e24292a367d70fc453865b02f2454d0ad9a196290776445ec228a0d7603ba0213d3073796e4476881956b3b990f91b0982e809355ad22534d5464840"' :
                                            'id="xs-components-links-module-ProduitsModule-20e24135e24292a367d70fc453865b02f2454d0ad9a196290776445ec228a0d7603ba0213d3073796e4476881956b3b990f91b0982e809355ad22534d5464840"' }>
                                            <li class="link">
                                                <a href="components/CreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProduitsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProduitsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProduitsRoutingModule.html" data-type="entity-link" >ProduitsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PublicModule-2ed36b4a04d86bb70563d9cdca121b39c185eaf6f0a5abdadc531ff63eedb13640fec9d7bcd506f02ef8e89971fb58ecf06a6eee544092a7145d931fe84e42d2"' : 'data-target="#xs-pipes-links-module-PublicModule-2ed36b4a04d86bb70563d9cdca121b39c185eaf6f0a5abdadc531ff63eedb13640fec9d7bcd506f02ef8e89971fb58ecf06a6eee544092a7145d931fe84e42d2"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PublicModule-2ed36b4a04d86bb70563d9cdca121b39c185eaf6f0a5abdadc531ff63eedb13640fec9d7bcd506f02ef8e89971fb58ecf06a6eee544092a7145d931fe84e42d2"' :
                                            'id="xs-pipes-links-module-PublicModule-2ed36b4a04d86bb70563d9cdca121b39c185eaf6f0a5abdadc531ff63eedb13640fec9d7bcd506f02ef8e89971fb58ecf06a6eee544092a7145d931fe84e42d2"' }>
                                            <li class="link">
                                                <a href="pipes/FormatEtat.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormatEtat</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CarouselComponent.html" data-type="entity-link" >CarouselComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommandeDetailComponent-1.html" data-type="entity-link" >CommandeDetailComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BoissonService.html" data-type="entity-link" >BoissonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatalogueService.html" data-type="entity-link" >CatalogueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommandeService.html" data-type="entity-link" >CommandeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LivraisonService.html" data-type="entity-link" >LivraisonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PanierService.html" data-type="entity-link" >PanierService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserServiceService.html" data-type="entity-link" >UserServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZoneService.html" data-type="entity-link" >ZoneService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/HasRoleGuard.html" data-type="entity-link" >HasRoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ICatalogue.html" data-type="entity-link" >ICatalogue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICommande.html" data-type="entity-link" >ICommande</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IComplement.html" data-type="entity-link" >IComplement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICredential.html" data-type="entity-link" >ICredential</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProduit.html" data-type="entity-link" >IProduit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToken.html" data-type="entity-link" >IToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IZone.html" data-type="entity-link" >IZone</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Livraison.html" data-type="entity-link" >Livraison</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket.html" data-type="entity-link" >Ticket</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});