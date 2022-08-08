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
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-da021e51cc8fc7627dc54f2aadc4f49fce1136556f77b628674a33580b9cfa041ec92c4f7cab4b9e5158bbc2ff5dab4c1937f4ec228b61ce1814837bf6cb86a7"' : 'data-target="#xs-components-links-module-AppModule-da021e51cc8fc7627dc54f2aadc4f49fce1136556f77b628674a33580b9cfa041ec92c4f7cab4b9e5158bbc2ff5dab4c1937f4ec228b61ce1814837bf6cb86a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-da021e51cc8fc7627dc54f2aadc4f49fce1136556f77b628674a33580b9cfa041ec92c4f7cab4b9e5158bbc2ff5dab4c1937f4ec228b61ce1814837bf6cb86a7"' :
                                            'id="xs-components-links-module-AppModule-da021e51cc8fc7627dc54f2aadc4f49fce1136556f77b628674a33580b9cfa041ec92c4f7cab4b9e5158bbc2ff5dab4c1937f4ec228b61ce1814837bf6cb86a7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommandeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommandeDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandeDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-da021e51cc8fc7627dc54f2aadc4f49fce1136556f77b628674a33580b9cfa041ec92c4f7cab4b9e5158bbc2ff5dab4c1937f4ec228b61ce1814837bf6cb86a7"' : 'data-target="#xs-pipes-links-module-AppModule-da021e51cc8fc7627dc54f2aadc4f49fce1136556f77b628674a33580b9cfa041ec92c4f7cab4b9e5158bbc2ff5dab4c1937f4ec228b61ce1814837bf6cb86a7"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-da021e51cc8fc7627dc54f2aadc4f49fce1136556f77b628674a33580b9cfa041ec92c4f7cab4b9e5158bbc2ff5dab4c1937f4ec228b61ce1814837bf6cb86a7"' :
                                            'id="xs-pipes-links-module-AppModule-da021e51cc8fc7627dc54f2aadc4f49fce1136556f77b628674a33580b9cfa041ec92c4f7cab4b9e5158bbc2ff5dab4c1937f4ec228b61ce1814837bf6cb86a7"' }>
                                            <li class="link">
                                                <a href="pipes/FormatEtat.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormatEtat</a>
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
                                            'data-target="#components-links-module-AuthModule-be39baf6f3b30478195a6261848cea09c17bae673cc805aa4ce13e845dd4add8556fff800bd79a29ac983dca1bb3c0b2018b27d5070022fd3b63610de512cb03"' : 'data-target="#xs-components-links-module-AuthModule-be39baf6f3b30478195a6261848cea09c17bae673cc805aa4ce13e845dd4add8556fff800bd79a29ac983dca1bb3c0b2018b27d5070022fd3b63610de512cb03"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-be39baf6f3b30478195a6261848cea09c17bae673cc805aa4ce13e845dd4add8556fff800bd79a29ac983dca1bb3c0b2018b27d5070022fd3b63610de512cb03"' :
                                            'id="xs-components-links-module-AuthModule-be39baf6f3b30478195a6261848cea09c17bae673cc805aa4ce13e845dd4add8556fff800bd79a29ac983dca1bb3c0b2018b27d5070022fd3b63610de512cb03"' }>
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
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-384e76c9a06e2e4fc7f88a640908d353a45ec0e05a3533183b9fe0ef01704f9599ba23a61d65b9d3440a872a5123d8a17a2b08223083f7219774ce81393dcf17"' : 'data-target="#xs-components-links-module-LayoutModule-384e76c9a06e2e4fc7f88a640908d353a45ec0e05a3533183b9fe0ef01704f9599ba23a61d65b9d3440a872a5123d8a17a2b08223083f7219774ce81393dcf17"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-384e76c9a06e2e4fc7f88a640908d353a45ec0e05a3533183b9fe0ef01704f9599ba23a61d65b9d3440a872a5123d8a17a2b08223083f7219774ce81393dcf17"' :
                                            'id="xs-components-links-module-LayoutModule-384e76c9a06e2e4fc7f88a640908d353a45ec0e05a3533183b9fe0ef01704f9599ba23a61d65b9d3440a872a5123d8a17a2b08223083f7219774ce81393dcf17"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-3a7980e3142839993bd4c2b7b9b191062736a0eaeab0f03104067ef534f329c68135629aef1afaf5bdc5c258cf156f36d9e2199e0cf137b417533857960d3746"' : 'data-target="#xs-components-links-module-PublicModule-3a7980e3142839993bd4c2b7b9b191062736a0eaeab0f03104067ef534f329c68135629aef1afaf5bdc5c258cf156f36d9e2199e0cf137b417533857960d3746"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-3a7980e3142839993bd4c2b7b9b191062736a0eaeab0f03104067ef534f329c68135629aef1afaf5bdc5c258cf156f36d9e2199e0cf137b417533857960d3746"' :
                                            'id="xs-components-links-module-PublicModule-3a7980e3142839993bd4c2b7b9b191062736a0eaeab0f03104067ef534f329c68135629aef1afaf5bdc5c258cf156f36d9e2199e0cf137b417533857960d3746"' }>
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
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PanierComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PublicModule-3a7980e3142839993bd4c2b7b9b191062736a0eaeab0f03104067ef534f329c68135629aef1afaf5bdc5c258cf156f36d9e2199e0cf137b417533857960d3746"' : 'data-target="#xs-pipes-links-module-PublicModule-3a7980e3142839993bd4c2b7b9b191062736a0eaeab0f03104067ef534f329c68135629aef1afaf5bdc5c258cf156f36d9e2199e0cf137b417533857960d3746"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PublicModule-3a7980e3142839993bd4c2b7b9b191062736a0eaeab0f03104067ef534f329c68135629aef1afaf5bdc5c258cf156f36d9e2199e0cf137b417533857960d3746"' :
                                            'id="xs-pipes-links-module-PublicModule-3a7980e3142839993bd4c2b7b9b191062736a0eaeab0f03104067ef534f329c68135629aef1afaf5bdc5c258cf156f36d9e2199e0cf137b417533857960d3746"' }>
                                            <li class="link">
                                                <a href="pipes/TailleBoissonPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TailleBoissonPipe</a>
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
                                    <a href="injectables/BoissonService.html" data-type="entity-link" >BoissonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatalogueService.html" data-type="entity-link" >CatalogueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommandeService.html" data-type="entity-link" >CommandeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PanierService.html" data-type="entity-link" >PanierService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZoneService.html" data-type="entity-link" >ZoneService</a>
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
                                <a href="interfaces/IProduit.html" data-type="entity-link" >IProduit</a>
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