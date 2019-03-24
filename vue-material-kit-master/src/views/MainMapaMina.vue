<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>Mapa da Mina</h1>
              <h3>Como se tornar uma profissional da música!</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container" v-if="!dadosEnviados">
          <div id="inputs">
            <div class="title">
              <h3>Oie! Precisamos de algumas informações para te ajudar...</h3>
            </div>
            <div class="md-layout">
              <div
                class="md-layout-item md-size-50 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
              >
                <md-field>
                  <label>Nome Artístico</label>
                  <md-input v-model="nome" type="text"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout">
              <div
                class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
              >
                <md-field>
                  <label>Cidade</label>
                  <md-input v-model="cidade" type="text"></md-input>
                </md-field>
              </div>
              <div
                class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
              >
                <md-field>
                  <label>Estado</label>
                  <md-input v-model="estado" type="text"></md-input>
                </md-field>
              </div>
              <br>
            </div>
          </div>
          <div id="checkRadios">
            <div class="md-layout">
              <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-medium-size-25">
                <div class="title">
                  <span>Qual plataforma de música você mais usa?</span>
                </div>
                <div class="flex-column">
                  <md-checkbox v-model="cbDeezer">Deezer</md-checkbox>
                  <md-checkbox v-model="cbSpotify">Spotify</md-checkbox>
                  <md-checkbox v-model="cbYoutube">Youtube</md-checkbox>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-medium-size-25">
                <div class="title">
                  <span>Qual carreira você tem interesse?</span>
                </div>
                <div class="flex-column">
                  <md-checkbox v-model="cbProdutora">Produtora musical</md-checkbox>
                  <md-checkbox v-model="cbCompositora">Compositora</md-checkbox>
                  <md-checkbox v-model="cbDJ">DJ</md-checkbox>
                  <md-checkbox v-model="cbInterprete">Interprete</md-checkbox>
                </div>
              </div>
            </div>
            <br>
            <div class="md-layout">
              <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-medium-size-25">
                <md-button class="md-primary md-round" @click="sendForm">Enviar</md-button>
              </div>
            </div>
          </div>
          <!-- end inputs -->
        </div>
        <div class="container" v-else>
          <div class="title">
            <h3>Diante da sua resposta e baseado nas suas preferências na plataforma selecionada... Observamos:</h3>
          </div>
          <div id="images">
            <div class="md-layout">
              <div
                class="md-layout-item md-medium-25 md-xsmall-size-100"
                :class="{ 'text-center': responsive }"
              >
                <h4>Gênero mais ouvido:</h4>
                <img
                  :src="graph"
                  alt="Graph"
                  class="rounded"
                  :class="{ 'responsive-image': responsive }"
                >
              </div>
              <div
                class="md-layout-item md-medium-25 md-xsmall-size-100"
                :class="{ 'text-right': responsive }"
              >
                <h4>Participação feminina:</h4>
                <img
                  :src="percfem"
                  alt="percfem"
                  class="rounded"
                  :class="{ 'responsive-image': responsive }"
                >
              </div>
            </div>
          </div>
          <div class="section2">
            <h4>Essas são suas divas mais ouvidas, selecione a que mais te inspira:</h4>
            <div class="team text-center">
              <div class="md-layout">
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <md-button
                    class="team-player md-primary md-simple"
                    :class="selected ? 'pressed' : ''"
                    @click="pressedbutton"
                  >
                    <md-card class="md-card-plain">
                      <div class="md-layout-item md-size-50 mx-auto">
                        <img
                          :src="karol"
                          alt="karol conka"
                          class="img-raised rounded-circle img-fluid"
                        >
                      </div>
                      <h4 class="card-title">
                        Karol Conka
                        <br>
                        <small class="card-description text-muted">Cantora/Compositora</small>
                      </h4>
                    </md-card>
                  </md-button>
                </div>
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <md-button class="team-player md-primary md-simple">
                    <md-card class="md-card-plain">
                      <div class="md-layout-item md-size-50 mx-auto">
                        <img
                          :src="beyonce"
                          alt="beyonce"
                          class="img-raised rounded-circle img-fluid"
                        >
                      </div>
                      <h4 class="card-title">
                        Beyonce
                        <br>
                        <small class="card-description text-muted">Cantora/Compositora</small>
                      </h4>
                    </md-card>
                  </md-button>
                </div>
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <md-button class="team-player md-primary md-simple">
                    <md-card class="md-card-plain">
                      <div class="md-layout-item md-size-50 mx-auto">
                        <img
                          :src="camilla"
                          alt="camilla"
                          class="img-raised rounded-circle img-fluid"
                        >
                      </div>
                      <h4 class="card-title">
                        Camilla Cabello
                        <br>
                        <small class="card-description text-muted">Cantora/Compositora</small>
                      </h4>
                    </md-card>
                  </md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="section3" v-if="selected">
            <div class="md-layout-item md-size-100 md-small-size-100">
              <div class="title">
                <h3>
                  Saiba um pouco mais sobre a trajetoria música de:
                  <span class="purple">KAROL CONKA</span>
                </h3>
                <span style="font-weight:normal;">
                  Karoline dos Santos Oliveira nasceu em uma família humilde de Curitiba. Desde criança escrevia canções, os 13 anos de idade já participava de concursos de dança contemporânea em sua cidade natal, e sonhava em ser cantora. Aos 16 anos participou de um concurso escolar de rap e ganhou, e assim decidiu investir e se profissionalizar na área musical. Aos poucos foi construindo a sua carreira, ficando famosa por meio da internet, onde exibia seus videoclipes.
                  Integrou um quarteto chamado "Agamenon", lançando um mixtape com sete canções. A partir disso, começaram a ficar conhecidos. Iniciou sua carreira como rapper aos 17 anos, tendo conseguido cantar profissionalmente e realizar alguns. Aos 19 anos, se descobriu grávida. E apesar da surpresa, seguiu adiante com a carreira e deu à luz um menino, Jorge.
                  <a
                    href="/"
                  >Leia mais</a>
                </span>
              </div>
              <div class="title purple">
                <h2>Como chegar lá???</h2>
                <h3>
                  Temos um time preparado para te orientar nesse início de carreira que é tão delicado.
                  <br>Entre em contato conosco em:
                  <a
                    href="mailto:contato@mapadamina.com"
                  >contato@mapadamina.com</a> ou pelo WhatsApp (21) 9XXXX-XXXX para entendermos suas necessidades e dar o Mapa da Mina!
                </h3>
              </div>
              <br>
              <div class="title">
                <h3>Entenda melhor como funciona o mundo musical...</h3>
              </div>
              <br>
              <nav-tabs-card no-label>
                <template slot="content">
                  <md-tabs md-sync-route class="md-primary" md-alignment="left">
                    <md-tab id="tab-editora" md-label="Editoras Musicais" md-icon="queue_music">
                      <p>
                        Parabéns, você criou uma música. Mas como publicá-la? Como administrá-la? Como atender aos pedidos de uso dela em formatos variados (TV, publicidade, cinema...)? Se você é um independente que joga nas onze – e, principalmente, com um repertório relativamente pequeno –, é possível que consiga cuidar disso sozinho. Para todos os outros existem as editoras musicais, um ator do mercado fonográfico que suscita paixões e tem um papel importante na indústria.
                        Basicamente, a função da editora é promover, cadastrar, recolher e distribuir aos autores a receita auferida com as obras que representam, ou seja, atuar em todas as áreas que exigem a cobrança e o controle dos direitos de autor conforme estabelecido entre as partes. Em geral, licenciam direitos de reprodução (armazenamento), mecânicos (fonográficos), digitais, sincronização e reprodução de letras. Os direitos de execução pública ficam a cargo do Ecad e das sociedades de gestão coletiva como a UBC "leia mais"
                        Editoras: SonyATV, Warner Chappel, Universal Music Publishing
                      </p>
                    </md-tab>

                    <md-tab id="tab-gravadora" md-label="Gravadoras" md-icon="mic">
                      <p>
                        Uma gravadora trata-se de uma empresa especializada em fabricar, desenvolver, distribuir e promover gravações multimídia.
                        A Gravadora é a empresa responsável por ir da música ao fonograma, passando pelos diferentes processos de produção musical.
                        a Gravadora é a empresa que torna a música um produto que pode ser consumido pelo público (fonograma).
                      </p>
                    </md-tab>
                    <md-tab id="tab-posts" md-label="Projetos Sociais" md-icon="audiotrack">
                      Diversos projetos sociais podem te auxiliar na capacitação e profissionalização do seu sonho!
                      <br>
                      <a href="https://www.sommaiseu.org.br/">Som mais eu</a>
                      <br>
                      <a href="http://www.agenciadobem.org.br">Agência do Bem</a>
                      <br>
                      <a href="http://www.asmdobrasil.org.br/">Ação Social pela Música do Brasil</a>
                      <br>
                    </md-tab>

                    <md-tab id="tab-associacoes" md-label="Associações" md-icon="library_music">
                      <p>
                        No Brasil existem sete associações para garantir e representar os artistas e demais titulares filiados a elas: Abramus, Amar, Assim, Sbacem, Sicam, Socinpro e UBC. Toda a gestão coletiva (associações + Ecad) atua de forma conjunta para que o trabalho dos artistas seja reconhecido.
                        A Assembleia Geral do Ecad, formada por estas sociedades, é responsável pela fixação de preços e de todas as regras de arrecadação e distribuição dos valores adotadas pelo Ecad, sendo estas baseadas em critérios utilizados internacionalmente.
                        Para receber direitos autorais de execução pública, os artistas e demais titulares precisam ser filiados a uma das associações e manter seu repertório sempre atualizado. Todas as informações referentes ao cadastro de obras musicais e fonogramas, assim como sobre valores distribuídos aos artistas, são concedidas diretamente pelas associações. ​
                      </p>
                    </md-tab>
                    <md-tab id="tab-cursos" md-label="Cursos" md-icon="book">
                      <a
                        href="https://www.primecursos.com.br/musica/"
                      >Cursos de Música Online Grátis | Prime Cursos</a>
                      <br>
                      <a
                        href="http://elitemusical.com.br/"
                      >Elite Musical - Escola de Música no Rio de Janeiro e São Paulo</a>
                      <br>
                      <a
                        href="http://www.centromusicaldowntown.com.br/cursos/"
                      >Centro Musical Downtown | Aulas de Música na Barra‎</a>
                      <a href="http://www.studiomel.com/119.html">Cursos de Canto - Studio Mel</a>
                      <br>
                      <a
                        href="https://www.musicdot.com.br/curso-online-canto-performance"
                      >Curso Online Canto: Melhorando a performance no palco | MusicDot</a>
                      <br>
                    </md-tab>
                    <md-tab id="tab-camps" md-label="Camps" md-icon="music_video"></md-tab>
                  </md-tabs>
                </template>
              </nav-tabs-card>
              <div class="title">
                <h3>Conheça o trabalho de mulheres que também começaram por aqui:</h3>
              </div>
              <iframe
                src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A1En0npt8h4gY0r9JfS8tPB"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
                style="max-height: 90px; width:auto; min-width: 800px;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicElements from "./components/BasicElementsSection";
import Tabs from "./components/TabsSection";
import NavPills from "./components/NavPillsSection";
import TypographyImages from "./components/TypographyImagesSection";
import JavascriptComponents from "./components/JavascriptComponentsSection";
import { LoginCard } from "@/components";
import { NavTabsCard } from "@/components";

export default {
  components: {
    BasicElements,
    Tabs,
    NavPills,
    TypographyImages,
    JavascriptComponents,
    LoginCard,
    NavTabsCard
  },
  name: "mapamina",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
    },
    karol: {
      type: String,
      default: require("@/assets/img/faces/karolconka.jpg")
    },
    beyonce: {
      type: String,
      default: require("@/assets/img/faces/beyonce.jpg")
    },
    camilla: {
      type: String,
      default: require("@/assets/img/faces/camilla.jpg")
    },
    graph: {
      type: String,
      default: require("@/assets/img/graph.jpg")
    },
    percfem: {
      type: String,
      default: require("@/assets/img/percfem.jpg")
    },
    player: {
      type: String,
      default: require("@/assets/img/percfem.jpg")
    }
  },
  data() {
    return {
      responsive: false,
      nome: null,
      cidade: null,
      estado: null,
      cbDeezer: false,
      cbSpotify: false,
      cbYoutube: false,
      cbDJ: false,
      cbProdutora: false,
      cbCompositora: false,
      cbInterprete: false,
      dadosEnviados: false,
      selected: false
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  methods: {
    sendForm() {
      this.dadosEnviados = true;
    },
    pressedbutton() {
      this.selected = true;
    }
  }
};
</script>
<style lang="scss">
.brand > h1 {
  font-family: "Dandeleon";
}

.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

.title > span {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
}

.title {
  margin-bottom: 0px !important;
}

.title > h2,
h3 > .purple {
  color: #9c27b0 !important;
}

.pressed {
  border: 2px solid #9c27b0 !important;
}

.section2 {
  padding-top: 70px;
}

.section3 {
  padding-top: 50px;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
