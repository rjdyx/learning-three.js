export default {
  backgroundColor: 'transparent',
  globe: {
    environment: 'none',
    baseTexture: require('@assets/world3.jpg'),
    heightTexture: require('@assets/world2.jpg'),

    shading: 'lambert',

    light: {
      ambient: {
        intensity: 0.4
      },
      main: {
        intensity: 0.4
      }
    },

    viewControl: {
      autoRotate: true,
      distance: 300
    }
  },
  series: {

    type: 'lines3D',

    coordinateSystem: 'globe',

    blendMode: 'lighter',

    lineStyle: {
      width: 1,
      color: 'rgb(50, 50, 150)',
      opacity: 0.1
    },

    data: []
  }
}
