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
        <p>
          Veniam irure id sit qui fugiat deserunt sint cillum velit non. Nisi
          ipsum dolor dolor ut nostrud ullamco consequat eu voluptate esse. Ex
          qui do sit fugiat est proident consequat elit commodo id veniam
          fugiat. Voluptate non et mollit non qui proident ad ut nostrud. Ea
          dolore ut do do aute deserunt nisi adipisicing sit Lorem proident est
          occaecat occaecat. Aliquip sunt quis adipisicing labore qui
          adipisicing eu sint dolor.
        </p>
      </div>
    </li>
    <li>
      <h3>V.V. Tamar</h3>
      <div class="project-content">
        <a href="https://vvtamar.nl/" target="_blank" rel="noopener">
          <img
            src="../assets/images/vvtamar-min.png"
            alt="vvtamar.nl"
            width="320"
            height="240"
          />
        </a>
        <p>
          Deserunt adipisicing duis consectetur veniam duis nostrud do Lorem
          incididunt dolor labore et. Amet ipsum do mollit sit officia
          cupidatat. Non sunt velit ullamco ut irure cupidatat ea. Magna velit
          est est excepteur dolore nulla do ad veniam. In pariatur anim
          excepteur anim veniam irure ullamco. Enim aliquip cupidatat minim
          laboris nostrud commodo pariatur elit eu incididunt enim nostrud do
          dolor. Aliqua amet aliqua do reprehenderit nulla sunt duis
          reprehenderit.
        </p>
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
        <p>
          Qui eu anim occaecat eiusmod qui et incididunt nisi consequat. Do ad
          aliquip non ullamco esse mollit exercitation laborum ea laborum in
          aliquip ea non. Reprehenderit qui occaecat non duis nulla et ipsum
          nulla cillum magna qui sint enim. Anim voluptate cillum incididunt ea
          incididunt enim in sint occaecat proident id do sit. Nulla fugiat
          tempor proident cupidatat excepteur aliqua ipsum sit magna voluptate.
          Ut nulla eiusmod dolore cillum eu sit Lorem.
        </p>
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
        <p>
          Eiusmod deserunt velit nulla dolor cillum. Ea esse magna dolore do
          tempor ex est. Ea eu eiusmod nostrud culpa ea consequat veniam.
          Laborum in commodo adipisicing commodo quis fugiat laborum commodo.
          Est tempor ad in est ipsum.
        </p>
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
    box-shadow: 1px 1px 4px rgba($color: black, $alpha: 0.5);

    &:hover,
    &:active {
      filter: none;
      box-shadow: 2px 2px 8px rgba($color: black, $alpha: 0.5);
    }
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