<template>
  <div class="hair">
    <div class="hair__ahoge">
      <div class="hair__ahoge-outer">
        <div class="hair__ahoge-inner">
          <div class="hair__ahoge-light"></div>
          <!-- /.hair__ahoge-light -->
        </div>
        <!-- /.hair__ahoge-inner -->
      </div>
      <!-- /.hair__ahoge-outer -->
    </div>
    <!-- /.hair__ahoge -->
    <div class="hair-ovals">
      <div class="hair-ovals__inner">
        <div class="hair-oval"></div>
        <!-- /.hair-oval -->
        <div class="hair-oval"></div>
        <!-- /.hair-oval -->
        <div class="hair-oval"></div>
        <!-- /.hair-oval -->
      </div>
      <!-- /.hair-ovals__inner -->
    </div>
    <!-- /.hair-ovals -->
    <div class="hair__lines">
      <HairLine />
      <HairLine />
      <HairLine />
      <HairLine />
      <HairLine />
      <HairLine>
        <div class="hair__line-bottom"></div>
        <!-- /.hair__line-bottom -->
      </HairLine>
      <HairLine />
      <HairLine />
      <HairLine />
      <HairLine />
      <HairLine>
        <div class="hair__line-light"></div>
        <!-- /.hair__line-light -->
      </HairLine>
      <HairLine />
      <HairLine />
    </div>
    <!-- /.hair__lines -->
  </div>
  <!-- /.hair -->
</template>

<script>
import HairLine from './hair-line.vue';

export default {
  components: { HairLine },
  name: 'Hair',
};
</script>
