<template>
  <transition name="settings" mode="out-in">
    <div v-if="opened" class="card">
      <div class="settings-header">
        <h3>Settings</h3>
        <button
          @click="opened = false"
          class="icon-btn btn-small"
          aria-label="Minimise"
        >
          <font-awesome-icon :icon="['fas', 'compress-alt']" />
        </button>
      </div>

      <ul class="settings-list">
        <li>
          <div class="setting">
            <h4>Wallpaper</h4>
          </div>
          <div class="triangle-player">
            <div class="triangle-value" title="Number of triangles">
              {{ this.$store.state.number }}
              <div class="triangle-up"></div>
            </div>
            <button
              @click="removeTriangle"
              class="icon-btn"
              :disabled="noTriangles"
              title="Remove triangle"
              aria-label="Remove"
            >
              <font-awesome-icon :icon="['fas', 'minus']" />
            </button>
            <button
              @click="this.$store.state.number++"
              class="icon-btn"
              title="Add triangle"
              aria-label="Add"
            >
              <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
            <button
              @click="this.$store.state.shuffle = true"
              class="icon-btn btn-small"
              :disabled="noTriangles"
              title="Shuffle triangles"
              aria-label="Shuffle"
            >
              <font-awesome-icon :icon="['fas', 'random']" />
            </button>
            <button
              @click="removeAllTriangles"
              class="icon-btn btn-small"
              :disabled="noTriangles"
              title="Remove all triangles"
              aria-label="Clear"
            >
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
          </div>
          <div class="triangle-player">
            <div
              class="triangle-value"
              title="Duration of movement (higher is slower)"
            >
              <!-- <font-awesome-icon :icon="['fas', 'stopwatch']" /> -->
              {{ this.$store.state.interval }}s
            </div>
            <button
              @click="decreaseInterval"
              class="icon-btn"
              :disabled="this.$store.state.interval <= 1"
              title="Decrease movement speed"
              aria-label="Decrease"
            >
              <font-awesome-icon :icon="['fas', 'fast-backward']" />
            </button>
            <button
              v-if="this.$store.state.moving"
              @click="this.$store.state.moving = false"
              class="icon-btn btn-big"
              title="Pause triangle movement"
              aria-label="Pause"
            >
              <font-awesome-icon :icon="['fas', 'pause']" />
            </button>
            <button
              v-else
              @click="this.$store.state.moving = true"
              class="icon-btn btn-big"
              aria-label="Play"
            >
              <font-awesome-icon :icon="['fas', 'play']" />
            </button>
            <button
              @mousedown="increaseInterval"
              class="icon-btn"
              title="Increase movement speed"
              aria-label="Increase"
            >
              <font-awesome-icon :icon="['fas', 'fast-forward']" />
            </button>
          </div>
        </li>
        <li class="setting">
          <h4>Invert Theme</h4>
          <button @click="toggleTheme" class="icon-btn" aria-label="Invert">
            <font-awesome-icon
              :icon="['fas', 'toggle-off']"
              v-if="this.$store.state.systemTheme"
            />
            <font-awesome-icon :icon="['fas', 'toggle-on']" v-else />
          </button>
        </li>
      </ul>
    </div>
    <div v-else class="settings-icon">
      <button
        @click="opened = true"
        class="icon-btn btn-small"
        aria-label="Settings"
      >
        <font-awesome-icon :icon="['fas', 'cog']" />
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Background Settings",
  data() {
    return {
      opened: false,
    };
  },
  computed: {
    noTriangles() {
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
    toggleTheme() {
      this.$store.state.systemTheme = !this.$store.state.systemTheme;
      // this.$store.state.dark = !this.$store.state.dark;
    },
    increaseInterval() {
      // this.$store.state.moving = false;
      this.$store.state.interval++;
    },
    decreaseInterval() {
      // this.$store.state.moving = false;
      if (this.$store.state.interval > 1) {
        this.$store.state.interval--;
      }
    },
  },
};
</script>

<style lang="scss">
.settings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  h3 {
    margin: 0.5rem 0;
  }
}

.settings-list {
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    padding: 0.75rem 0;
    border-top: 1px solid $soft-border;

    h4 {
      margin: 0.4rem 0;
      font-weight: normal;
      text-align: left;
    }
  }
  .setting {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.triangle-value {
  display: inline-flex;
  font-size: 1.25rem;
  font-weight: bold;
  align-items: center;
  padding: 0.2rem 0.5rem;
  background-color: $greyer;
  border-radius: 1.25rem;
  min-width: 4ch;
  text-align: center;
  justify-content: center;
}

.triangle-player {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // place-content: center;
  margin: 0.25rem 0;
}

.icon-btn {
  border: none;
  background: none;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.2rem;
  margin: 0 0.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  color: $violet;

  &:hover {
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
  height: 2rem;
  width: 2rem;
  font-size: 1.2rem;
}

.btn-big {
  height: 3rem;
  width: 3rem;
  font-size: 2rem;
}

.triangle-up {
  width: 0;
  height: 0;
  border-left: 0.6rem solid transparent;
  border-right: 0.6rem solid transparent;
  border-bottom: 1.2rem solid $green;
  margin-left: 0.5ch;
}

.settings-enter-from,
.settings-leave-to {
  transform: translateY(-0.5em);
  opacity: 0;
}

.settings-enter-active,
.settings-leave-active {
  transition: all 0.25s linear;
}
</style>