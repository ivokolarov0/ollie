<template>
  <div class="body">
    <div class="arms">
      <div class="arm arm--left">
        <div class="arm-band-ribbon">
          <div class="arm-band-ribbon__inner"></div>
          <div class="arm-band-ribbon__inner"></div>
        </div>
        <div class="arm__band">
          <div class="sides">
            <span></span>
            <span></span>
          </div>
          <div class="arm-ribbon">
            <div class="arm-ribbon__inner">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="arm__patch">
          <div class="arm__patch-inner">
            <div class="arm__stiches">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="arm arm--right">
        <div class="arm__band">
          <div class="sides">
            <span></span>
            <span></span>
          </div>
          <div class="arm-ribbon">
            <div class="arm-ribbon__inner">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="arm__patch">
          <div class="arm__patch-inner">
            <div class="arm__stiches">
              <span></span>
              <span></span>
            </div>
            <div class="arm__patch-bandages">
              <div class="arm__patch-bandage"></div>
              <div class="arm__patch-bandage"></div>
              <div class="arm__patch-bandage"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="front-ribbon">
      <div class="front-ribbon__inner"></div>
      <div class="front-ribbon__inner"></div>
      <div class="front-ribbon__laces">
        <div class="front-ribbon__lace"></div>
        <div class="front-ribbon__lace"></div>
      </div>
    </div>
    <div class="body__shoulders">
      <div class="body__shoulders-inner">
        <div class="body-patches">
          <div class="body-patch">
            <div class="body-patch__inner"></div>
          </div>
          <div class="body-patch">
            <div class="body-patch__inner"></div>
          </div>
          <div class="body-patch">
            <div class="body-patch__inner"></div>
          </div>
          <div class="body-patch">
            <div class="body-patch__inner"></div>
          </div>
          <div class="body-patch"></div>
          <div class="body-patch"></div>
        </div>
        <div class="body__stiches">
          <div class="body__stich"></div>
          <div class="body__stich"></div>
          <div class="body__stich"></div>
          <div class="body__stich"></div>
          <div class="body__stich"></div>
          <div class="body__stich"></div>
        </div>
      </div>
    </div>
    <div class="body__torso">
      <div class="body__torso-outer">
        <div class="body__torso-inner">
          <div class="dress">
            <div class="dress__endings">
              <div class="dress-ending">
                <div class="dress-ending__inner"></div>
              </div>
              <div class="dress-ending">
                <div class="dress-ending__inner"></div>
              </div>
              <div class="dress-ending">
                <div class="dress-ending__inner"></div>
              </div>
              <div class="dress-ending">
                <div class="dress-ending__inner"></div>
              </div>
              <div class="dress-ending">
                <div class="dress-ending__inner"></div>
              </div>
              <div class="dress-ending"></div>
              <div class="dress-ending">
                <div class="dress-ending__inner"></div>
              </div>
              <div class="dress-ending">
                <div class="dress-ending__inner"></div>
              </div>
              <div class="dress-ending">
                <div class="dress-ending__inner"></div>
              </div>
              <div class="dress-ending">
                <div class="dress-ending__inner"></div>
              </div>
              <div class="dress-ending">
                <div class="dress-ending__inner"></div>
              </div>
              <div class="dress-ending">
                <div class="dress-ending__inner"></div>
              </div>
            </div>
          </div>
          <DressMiddle />
          <DressTop />
          <div class="legs">
            <div class="leg leg--left">
              <div class="leg__inner">
                <div class="leg__top-flesh"></div>
                <div class="leg__bandages">
                  <div class="leg__bandage"></div>
                  <div class="leg__bandage"></div>
                  <div class="leg__bandage">
                    <div class="leg__bandage-stich"></div>
                    <div class="leg__bandage-stich"></div>
                    <div class="leg__bandage-stich"></div>
                  </div>
                  <div class="leg__bandage"></div>
                </div>
              </div>
              <Shoe />
            </div>
            <div class="leg leg--right">
              <div class="leg__inner">
                <div class="leg-stiches">
                  <div class="leg-stich"></div>
                  <div class="leg-stich"></div>
                  <div class="leg-stich"></div>
                  <div class="leg-stich"></div>
                  <div class="leg-stich"></div>
                  <div class="leg-stich"></div>
                  <div class="leg-stich"></div>
                  <div class="leg-stich"></div>
                  <div class="leg-stich"></div>
                  <div class="leg-stich"></div>
                </div>
                <div class="leg__bandages">
                  <div class="leg__bandage"></div>
                  <div class="leg__bandage">
                    <div class="leg-stich"></div>
                    <div class="leg-stich"></div>
                    <div class="leg-stich"></div>
                    <div class="leg-stich"></div>
                  </div>
                </div>
              </div>
              <div class="leg-shoe">
                <div class="leg-shoe__inner">
                  <div class="leg-shoe__inner-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shoe from '../shoe/shoe';
import DressMiddle from '../dress-middle/dress-middle';
import DressTop from '../dress-top/dress-top';

export default {
  name: 'Body',

  components: {
    Shoe,
    DressMiddle,
    DressTop,
  },
};
</script>
