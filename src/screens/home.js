import React, { Component } from "react";
import provider from "./../providers/index";

export default class TelaInicial extends Component {
    constructor() {
        document.title = "Cinema";
        super();
        this.state = {
            cidades: [],
            cinemas: [],
            sessoes: [],
            cidadeAtual: null,
            cinemaAtual: null,
            loading: false
        }
    }

    componentDidMount = async () => {
        let response = await provider.listarCidades();
        this.setState({ cidades: response.data.cidades});
    }

    escolherCinema = async (e) => {
        let response = await provider.listarSessoes(e.target.value);
        console.log(response)
        this.setState({ sessoes: response.data.sessoes })
    }

    escolherCidade = async (e) => {
        this.setState({ cidadeAtual: e.target.value })
        let response = await provider.listarCinemas(e.target.value);
        this.setState({ cinemas: response.data.cinemas })
    }

    render() {
        return (

            <div>

                <section className="s-pageheader s-pageheader--home">

                    <header className="header">
                        <div className="header__content row">

                            <div className="header__logo">
                                <a className="logo" href="index.html">
                                    <img src="images/logo.svg" alt="Homepage" />
                                </a>
                            </div>

                            <ul className="header__social">
                                <li>
                                    <a href="#0"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                </li>
                            </ul>

                            <a className="header__search-trigger" href="#0"></a>

                            <div className="header__search">

                                <form role="search" method="get" className="header__search-form" action="#">
                                    <label>
                                        <span className="hide-content">Ache um filme:</span>
                                        <input type="search" className="search-field" placeholder="Type Keywords" name="s" title="Search for:" autoComplete="off" />
                                    </label>
                                    <input type="submit" className="search-submit" value="Search" />
                                </form>

                                <a href="#0" title="Close Search" className="header__overlay-close">Fechar</a>

                            </div>


                            <a className="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>

                            <nav className="header__nav-wrap">

                                <h2 className="header__nav-heading h6">Site Navigation</h2>

                                <ul className="header__nav">
                                    <li className="current"><a href="index.html" title="">Home</a></li>
                                    <li className="has-children">
                                        <a href="#0" title="">Categorias</a>
                                        <ul className="sub-menu">
                                            <li><a href="category.html">Lifestyle</a></li>
                                            <li><a href="category.html">Health</a></li>
                                            <li><a href="category.html">Family</a></li>
                                            <li><a href="category.html">Management</a></li>
                                            <li><a href="category.html">Travel</a></li>
                                            <li><a href="category.html">Work</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="#0" title="">Blog</a>
                                        <ul className="sub-menu">
                                            <li><a href="single-video.html">Video Post</a></li>
                                            <li><a href="single-audio.html">Audio Post</a></li>
                                            <li><a href="single-gallery.html">Gallery Post</a></li>
                                            <li><a href="single-standard.html">Standard Post</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html" title="">Sobre Nós</a></li>
                                    <li><a href="contact.html" title="">Contato</a></li>
                                </ul>

                                <a href="#0" title="Close Menu" className="header__overlay-close close-mobile-menu">Fechar</a>

                            </nav>

                        </div>
                    </header>


                    <div className="pageheader-content row">
                        <div className="col-full">

                            <div className="featured">

                                <div className="featured__column featured__column--big">
                                    <div className="entry" style={{ backgroundImage: 'url(images/1.jpg)' }}>

                                        <div className="entry__content">
                                            <span className="entry__category"><a href="#0">Vingadores: Ultimato</a></span>

                                            <h1><a href="#0" title="">Mais um filme da Marvel.</a></h1>

                                           
                                        </div>

                                    </div>
                                </div>

                                <div className="featured__column featured__column--small">

                                    <div className="entry" style={{ backgroundImage: 'url(images/2.jpg)' }}>

                                        <div className="entry__content">
                                            <span className="entry__category"><a href="#0">Interestelar</a></span>

                                            <h1><a href="#0" title="">Melhor filme do século?</a></h1>

                                            <div className="entry__info">
                                                <a href="#0" className="entry__profile-pic">
                                                    <img className="avatar" src="images/avatars/user-03.jpg" alt="" />
                                                </a>

                                              
                                            </div>
                                        </div>

                                    </div>

                                    <div className="entry" style={{ backgroundImage: 'url(images/3.jpg)' }}>

                                        <div className="entry__content">
                                            <span className="entry__category"><a href="#0">Guardiões da Galáxia vol. 3</a></span>

                                            <h1><a href="#0" title="">Mais um filme de criança desnecessário.</a></h1>

                                            <div className="entry__info">
                                                <a href="#0" className="entry__profile-pic">
                                                    <img className="avatar" src="images/avatars/user-03.jpg" alt="" />
                                                </a>

                                               
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="s-content">
                    <div className="text-center">
                        <h1>Procure pelo seu cinema</h1>

                        <div className="row">
                           
                            <div className="col-lg-12">
                                Sua cidade
                                <select name="cidades" className="form-control" value={this.state.cidadeAtual} 
                                    onChange={this.escolherCidade}>
                                    <option value={null} selected={true}>Escolha uma cidade</option>
                                    { this.state.cidades.map((c, index) =>
                                        <option value={c.id} key={index}>{c.nome}</option>
                                    )}
                                </select>
                            </div>
                            
                            { this.state.cinemas && 
                                <div className="col-lg-12">
                                    Seu cinema
                                    <select name="cinemas" className="form-control" 
                                        onChange={this.escolherCinema}>
                                        <option value={null} selected={true}>Escolha um cinema</option>
                                        { this.state.cinemas.map((c, index) =>
                                            <option value={c.id} key={index}>{c.nome}</option>
                                        )}
                                    </select>
                                </div>
                            }
                        </div>
                    </div>

                </section>
                
                { this.state.sessoes.length > 0 && 
                <section className="s-content">
                    
                   
                    
                    <div className="row masonry-wrap">
                        <div className="masonry">

                            <div className="grid-sizer"></div>

                            {this.state.sessoes.map((filme, index) =>
                            <article className="masonry__brick entry format-standard">

                                <div className="entry__thumb">
                                    <a href="single-standard.html" className="entry__thumb-link">
                                        <img src={`images/${filme.id}.jpg`} alt="" />
                                    </a>
                                </div>

                                <div className="entry__text">
                                    <div className="entry__header">

                                        <div className="entry__date">
                                            <a href="single-standard.html">{filme.inicio}</a>
                                        </div>
                                        <h1 className="entry__title"><a href="single-standard.html">{filme.titulo}</a></h1>

                                    </div>
                                    <div className="entry__excerpt">
                                        <p>
                                            {filme.sinopse}
                                        </p>
                                    </div>
                                    <div className="entry__meta">
                                        <span className="entry__meta-links">
                                            <a href="category.html">{filme.genero}</a>
                                            <a href="category.html">{filme.classificacao_etaria}</a>
                                        </span>
                                    </div>
                                </div>

                            </article>
                             )}
                        </div>
                    </div>
                   

                    <div className="row">
                        <div className="col-full">
                            <nav className="pgn">
                                <ul>
                                    <li><a className="pgn__prev" href="#0">Prev</a></li>
                                    <li><a className="pgn__num" href="#0">1</a></li>
                                    <li><span className="pgn__num current">2</span></li>
                                    <li><a className="pgn__num" href="#0">3</a></li>
                                    <li><a className="pgn__num" href="#0">4</a></li>
                                    <li><a className="pgn__num" href="#0">5</a></li>
                                    <li><span className="pgn__num dots">…</span></li>
                                    <li><a className="pgn__num" href="#0">8</a></li>
                                    <li><a className="pgn__next" href="#0">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </section>
                }
                <footer className="s-footer">

                    <div className="s-footer__main">
                        <div className="row">

                            <div className="col-two md-four mob-full s-footer__sitelinks">

                                <h4>Quick Links</h4>

                                <ul className="s-footer__linklist">
                                    <li><a href="#0">Home</a></li>
                                    <li><a href="#0">Blog</a></li>
                                    <li><a href="#0">Styles</a></li>
                                    <li><a href="#0">About</a></li>
                                    <li><a href="#0">Contact</a></li>
                                    <li><a href="#0">Privacy Policy</a></li>
                                </ul>

                            </div>

                            <div className="col-two md-four mob-full s-footer__archives">

                                <h4>Archives</h4>

                                <ul className="s-footer__linklist">
                                    <li><a href="#0">January 2018</a></li>
                                    <li><a href="#0">December 2017</a></li>
                                    <li><a href="#0">November 2017</a></li>
                                    <li><a href="#0">October 2017</a></li>
                                    <li><a href="#0">September 2017</a></li>
                                    <li><a href="#0">August 2017</a></li>
                                </ul>

                            </div>

                            <div className="col-two md-four mob-full s-footer__social">

                                <h4>Social</h4>

                                <ul className="s-footer__linklist">
                                    <li><a href="#0">Facebook</a></li>
                                    <li><a href="#0">Instagram</a></li>
                                    <li><a href="#0">Twitter</a></li>
                                    <li><a href="#0">Pinterest</a></li>
                                    <li><a href="#0">Google+</a></li>
                                    <li><a href="#0">LinkedIn</a></li>
                                </ul>

                            </div>

                            <div className="col-five md-full end s-footer__subscribe">

                                <h4>Our Newsletter</h4>

                                <p>Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.</p>

                                <div className="subscribe-form">
                                    <form id="mc-form" className="group" noValidate={true}>

                                        <input type="email" name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required="" />

                                        <input type="submit" name="subscribe" value="Send" />

                                        <label htmlFor="mc-email" className="subscribe-message"></label>

                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="s-footer__bottom">
                        <div className="row">
                            <div className="col-full">
                                <div className="s-footer__copyright">
                                    <span>© Copyright Philosophy 2018</span>
                                    <span>Site Template by <a href="https://colorlib.com/">Colorlib</a></span>
                                </div>

                                <div className="go-top">
                                    <a className="smoothscroll" title="Back to Top" href="#top"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>

                <div id="preloader">
                    <div id="loader">
                        <div className="line-scale">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}