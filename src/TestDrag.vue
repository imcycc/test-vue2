<template>
  <div>
    红色拖拽区域
    <div class="move-box" ref="moveBox">
      <div class="move-btn" ref="moveBtn"></div>
    </div>
    <div class="move-mask" ref="moveMask"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initDrag()
  },
  methods: {
    initDrag() {
      const moveBox = this.$refs.moveBox
      const moveBtn = this.$refs.moveBtn
      const moveMask = this.$refs.moveMask
      const viewportSafeVal = 10
      let docWidth, docHeight
      let startMouseX, startMouseY
      let startMouseLeftInBox,
        startMouseRightInBox,
        startMouseTopInBox,
        startMouseBottomInBox
      let mouseMinX, mouseMaxX, mouseMinY, mouseMaxY
      let timer;
      let prevE;

      // 计算边界
      const calc = (val, min, max, safe) => {
        if (val < min + safe) {
          return min + safe
        } else if (val > max - safe) {
          return max - safe
        } else {
          return val
        }
      }

      const mousedown = (e) => {
        moveMask.style.display = 'block';  // 添加遮罩层，防止遇到 iframe 移动事件失效

        document.addEventListener('mousemove', mousemove)
        document.addEventListener('mouseup', mouseup)

        docWidth = document.documentElement.clientWidth
        docHeight = document.documentElement.clientHeight

        startMouseX = e.clientX
        startMouseY = e.clientY

        const boxRect = moveBox.getBoundingClientRect()
        startMouseLeftInBox = e.clientX - boxRect.left
        startMouseRightInBox = boxRect.width - startMouseLeftInBox
        startMouseTopInBox = e.clientY - boxRect.top
        startMouseBottomInBox = boxRect.height - startMouseTopInBox

        mouseMinX = startMouseLeftInBox
        mouseMaxX = docWidth - startMouseRightInBox
        mouseMinY = startMouseTopInBox
        mouseMaxY = docHeight - startMouseBottomInBox

        moveBox.style.transition = '0s'
      }

      const mousemove = (e) => {
        prevE = e;
        timer && clearTimeout(timer);
        timer = setTimeout(mouseup, 3000); // 防止事件失效，导致遮罩层使用户无法操作，设置 3s 后自动重置

        let mouseX = calc(e.clientX, mouseMinX, mouseMaxX, viewportSafeVal)
        let mouseY = calc(e.clientY, mouseMinY, mouseMaxY, viewportSafeVal)

        moveBox.style.transform = `translate(${mouseX - startMouseX}px, ${
          mouseY - startMouseY
        }px)`
      }

      const mouseup = (e) => {
        e = e || prevE;
        timer && clearTimeout(timer);

        moveMask.style.display = 'none';

        document.removeEventListener('mousemove', mousemove)
        document.removeEventListener('mouseup', mouseup)

        // 判断点击事件
        const d = Math.sqrt((startMouseX - e.clientX) * (startMouseX - e.clientX) + (startMouseY - e.clientY) * (startMouseY - e.clientY));
        if (d < 7) {
          console.log('点击事件')
        }

        let mouseX = calc(e.clientX, mouseMinX, mouseMaxX, viewportSafeVal)
        let mouseY = calc(e.clientY, mouseMinY, mouseMaxY, viewportSafeVal)

        // 鼠标抬起时 所属区域
        const isLeft = e.clientX < docWidth / 2
        const isTop = e.clientY < docHeight / 2
        // 鼠标抬起时 box 位置
        const left = mouseX - startMouseLeftInBox
        const right = docWidth - mouseX - startMouseRightInBox
        const top = mouseY - startMouseTopInBox
        const bottom = docHeight - mouseY - startMouseBottomInBox
        // 计算最终后 box 位置（带单位）
        let lefted, righted, toped, bottomed, translateX, translateY
        lefted = righted = toped = bottomed = 'auto'
        translateX = translateY = 0

        if (isLeft) {
          lefted = `${viewportSafeVal}px`
          translateX = `${left - viewportSafeVal}px`
        } else {
          righted = `${viewportSafeVal}px`
          translateX = `${viewportSafeVal - right}px`
        }

        if (isTop) {
          toped = `${(top / docHeight) * 100}%`
        } else {
          bottomed = `${(bottom / docHeight) * 100}%`
        }

        moveBox.style = `top: ${toped}; right: ${righted}; bottom: ${bottomed}; left: ${lefted}; transform: translate(${translateX}, ${translateY})`

        setTimeout(() => {
          moveBox.style.transition = '0.2s'
          moveBox.style.transform = 'translate(0, 0)'
        })
      }

      moveBtn.addEventListener('mousedown', mousedown)
    },
  },
}
</script>

<style>
.move-box {
  position: fixed;
  inset: 100px auto auto 10px;
  width: 100px;
  height: 100px;
  background: yellow;
  z-index: 10000;
}

.move-btn {
  width: 40px;
  height: 40px;
  background: red;
  margin-left: 20px;
  margin-top: 20px;
  color: white;
  cursor: move;
  user-select: none;
}

.move-mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: none;
}
</style>