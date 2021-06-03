<template>
  <div id="background">
    <div
      v-for="(triangle, index) in triangles"
      v-bind:key="index"
      :style="triangle"
    ></div>
  </div>
</template>

<script lang="ts">
import { watch, watchEffect } from "vue";
export default {
  name: "Background",
  data() {
    return {
      triangles: [],
      intervalId: undefined,
    };
  },
  computed: {
    quantity(): number {
      return this.$store.state.number;
    },
    interval(): number {
      return this.$store.state.interval;
    },
    moving(): boolean {
      return this.$store.state.moving;
    },
    shuffle(): boolean {
      return this.$store.state.shuffle;
    },
  },
  created() {
    this.setTriangles(this.quantity);
  },
  unmounted() {
    clearInterval(this.intervalId);
  },
  mounted() {
    if (this.moving) {
      setTimeout(() => {
        this.updateMovement();
      }, 1);
    }
    watchEffect(() => {
      this.setTriangles(this.quantity);
      if (this.shuffle) {
        setTimeout(() => {
          this.shuffleTriangles();
        }, 1);
      }
    });
    watch(
      () => this.moving,
      (moving, prevMoving) => {
        if (moving != prevMoving) {
          this.updateMovement();
        }
      }
    );
  },
  methods: {
    setTriangles(newQuantity: number) {
      const difference = newQuantity - this.triangles.length;
      if (newQuantity <= 0) {
        this.triangles = [];
      } else if (difference > 0) {
        for (let i = 0; i < difference; i++) {
          //Generate triangle
          //Set random size
          let size = getRandomBetween(10, 70);
          let width = getRandomBetween(0, size);
          let triangle = {
            width: 0,
            height: 0,
            border: "0 solid transparent",
            position: "fixed",
            zIndex: -100,
            borderRightColor: getRandomColor(0.4),
            borderTopWidth: size - width + "vmin",
            borderBottomWidth: width + "vmin",
            borderRightWidth: size + "vmin",
            bottom: getRandomBetween(0, 100) + "vh",
            right: getRandomBetween(0, 100) + "vw",
            transform: "rotate(" + getRandomBetween(0, 360) + "deg)",
            transition: "",
          };
          this.triangles.push(triangle);
          if (this.moving) {
            this.updateMovement();
          }
        }
      } else if (difference < 0) {
        for (let i = 0; i < Math.abs(difference); i++) {
          this.triangles.pop();
        }
      }
    },
    moveTriangles(moving: boolean) {
      if (moving) {
        this.triangles.forEach(
          (triangle: { transition: string; transform: string }) => {
            triangle.transition = "transform " + this.interval + "s";
            triangle.transform =
              "translate3d(" +
              getRandomBetween(0, 100) +
              "vw," +
              getRandomBetween(0, 100) +
              "vh" +
              ",0) " +
              "rotate(" +
              getRandomBetween(-180, 180) +
              "deg)";
          }
        );
      } else {
        let backgroundDiv = document.getElementById("background");
        this.triangles.forEach(
          (
            triangle: { transition: string; transform: string },
            index: number
          ) => {
            triangle.transition = "";
            if (backgroundDiv) {
              triangle.transform = getComputedStyle(
                backgroundDiv.children[index] as HTMLDivElement
              ).transform;
            }
          }
        );
      }
    },
    updateMovement() {
      this.moveTriangles(this.moving);
      this.intervalId = clearInterval(this.intervalId);
      if (this.moving) {
        this.intervalId = setInterval(
          () => this.moveTriangles(this.moving),
          this.interval * 1000
        );
      }
    },
    shuffleTriangles() {
      this.triangles.forEach((triangle: any) => {
        triangle.bottom = getRandomBetween(0, 100) + "vh";
        triangle.right = getRandomBetween(0, 100) + "vw";
        triangle.transform = "rotate(" + getRandomBetween(0, 360) + "deg)";
      });
      this.$store.state.shuffle = false;
    },
  },
};

function getRandomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor(alpha: string | number) {
  return "hsla(" + Math.random() * 360 + ", 100%, 75%, " + alpha + ")";
}
</script>
