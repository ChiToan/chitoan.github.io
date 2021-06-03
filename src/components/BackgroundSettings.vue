<template>
  <transition name="settings">
    <div v-show="opened" class="card">
      <div class="triangle-player-header">
        <!-- <div class="triangle-up"></div> -->
        <div class="chip">
          <div class="chip-head">
            {{ this.$store.state.number }}
          </div>
          <div class="chip-content">Triangles</div>
        </div>

        <button @click="opened = false" class="icon-btn btn-small">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
      </div>
      <div class="triangle-player">
        <button
          @click="removeAllTriangles"
          class="icon-btn btn-small"
          :disabled="noTriangles"
        >
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
        <button
          @click="removeTriangle"
          class="icon-btn"
          :disabled="noTriangles"
        >
          <font-awesome-icon :icon="['fas', 'minus']" />
        </button>
        <button
          v-if="this.$store.state.moving"
          @click="this.$store.state.moving = false"
          class="icon-btn btn-big"
        >
          <font-awesome-icon :icon="['fas', 'pause']" />
        </button>
        <button
          v-else
          @click="this.$store.state.moving = true"
          class="icon-btn btn-big"
        >
          <font-awesome-icon :icon="['fas', 'play']" />
        </button>
        <button @click="this.$store.state.number++" class="icon-btn">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
        <button
          @click="this.$store.state.shuffle = true"
          class="icon-btn btn-small"
          :disabled="noTriangles"
        >
          <font-awesome-icon :icon="['fas', 'sync']" />
        </button>
      </div>
    </div>
  </transition>
  
  <transition name="settings">
  <div v-show="!opened">
    <button @click="opened = true" class="icon-btn">
      <font-awesome-icon :icon="['fas', 'cog']" />
    </button>
  </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: "Background Settings",
  data() {
    return {
      opened: false,
    };
  },
  computed: {
    noTriangles(): boolean {
      return this.$store.state.number <= 0;
    },
  },
  methods: {
    removeTriangle() {
      if (this.$store.state.number > 0) {
        this.$store.state.number--;
      }
    },
    removeAllTriangles() {
      this.$store.state.number = 0;
    },
    toggleMoving() {
      this.$store.state.moving = !this.$store.state.moving;
    },
  },
};
</script>

<style lang="scss">
.triangle-player {
  display: flex;
  align-items: center;
}

.triangle-player-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon-btn {
  border: none;
  background: none;
  height: 3rem;
  width: 3rem;
  padding: 0.2rem;
  margin: 0 0.5rem;
  cursor: pointer;
  font-size: 2rem;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  color: $violet;

  &:hover {
    color: $violet;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5)) brightness(115%);
  }

  &:active {
    filter: drop-shadow(0 -1px 2px rgba(0, 0, 0, 0.5));
  }

  &:disabled {
    color: $disabled;
    cursor: unset;
    filter: none;
  }
}

.btn-small {
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1.5rem;
}

.btn-big {
  height: 4rem;
  width: 4rem;
  font-size: 3rem;
}

.triangle-up {
  width: 0;
  height: 0;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-bottom: 2rem solid $green;
}

.header-title {
  margin: 0;
}

.chip {
  display: inline-flex;
  flex-direction: row;
  background-color: #e9e9e9;
  border: none;
  cursor: default;
  height: 2rem;
  outline: none;
  padding: 0;
  font-size: 0.9rem;
  white-space: nowrap;
  align-items: center;
  border-radius: 2rem;
  vertical-align: middle;
  text-decoration: none;
  justify-content: center;
}

.chip-head {
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: $green;
  font-size: 1.25rem;
  align-items: center;
  user-select: none;
  border-radius: 50%;
  justify-content: center;
  width: 2rem;
  font-weight: bolder;
  height: inherit;
  font-size: 20px;
  margin-right: -4px;
}
.chip-content {
  padding: 0 0.5rem;
}

.settings-enter-from,
.settings-leave-to {
  transform: translateX(20px);
  visibility: hidden;
  height: 0;
  // margin: 0;
  opacity: 0;
}

.settings-enter-active,
.settings-leave-active {
  transition: all 0.3s ease-out;
}
</style>