<template>
  <h2>
    <font-awesome-icon :icon="['fas', 'list']" /><br />
    Projects I've worked on
  </h2>
  <ul class="projects-list">
    <li>
      <h3>Résume</h3>
      <div class="project-content">
        <a href="https://resume.win.tue.nl/" target="_blank" rel="noopener">
          <img
            src="../assets/images/resume-min.png"
            alt="19XCV.nl"
            width="320"
            height="240"
          />
        </a>
        <div>
          <p>
            Software engineering project, the final project of my bachelor's degree. The project is a website that assesses the user using their resume and questions to determine the best match for the user.
            I mainly worked on creating the API's and the frontend of the backoffice, while also working on all kinds of shorter tasks.
          </p>
          <ul class="bulletpoints">
            <li>React</li>
            <li>Laravel</li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <h3>VV Tamar</h3>
      <div class="project-content">
        <a href="https://vvtamar.nl/" target="_blank" rel="noopener">
          <img
            src="../assets/images/vvtamar-min.png"
            alt="vvtamar.nl"
            width="320"
            height="240"
          />
        </a>
        <div>
          <p>
            Site of the volleyball association VV Tamar. This is the old website, which is made using plain PHP.
            Currently we are working on a new site from scratch using Laravel and Bootstrap.
          </p>
          <ul class="bulletpoints">
            <li>PHP</li>
            <li>Laravel</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <h3>Phylophile</h3>
      <div class="project-content">
        <a
          href="https://chitoan.github.io/PhyloD3/"
          target="_blank"
          rel="noopener"
          ><img
            src="../assets/images/phylophile-min.png"
            alt="chitoan.github.io/PhyloD3/"
            width="320"
            height="240"
        /></a>
        <div>
          <p>
            Simple web application that allows you to visualize phylogenetic trees. The application allows for simple comparison between two or more trees.
          </p>
          <ul class="bulletpoints">
            <li>React</li>
            <li>Bootstrap</li>
            <li>D3</li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <h3>19.XCV</h3>
      <div class="project-content">
        <a href="https://19xcv.nl/" target="_blank" rel="noopener"
          ><img
            src="../assets/images/19xcv-min.png"
            alt="19XCV.nl"
            width="320"
            height="240"
        /></a>
        <div>
          <p>
            Standard website for a influencer. The website is used as a contact and information page for followers and companies.
          </p>
          <ul class="bulletpoints">
            <li>Plain HTML, CSS & JavaScript</li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.projects-list {
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    border-top: 1px solid $soft-border;
  }
}

.project-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    padding: 0;
  }

  img {
    max-width: 320px;
    height: auto;
    box-shadow: 2px 2px 4px rgba($color: black, $alpha: 0.3);
    flex-grow: 4;
  }

  p {
    flex-grow: 6;
  }
}

.bulletpoints {
  // list-style-type: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  padding: 0;

  li {
    border: none;
    margin: 0 2em;
  }
}

@media (min-width: 1080px) {
  .project-content {
    flex-wrap: nowrap;

    a {
      margin: 1rem;
    }
  }
}
</style>>