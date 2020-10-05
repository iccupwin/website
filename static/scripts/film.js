TweenMax.set('#lightcirc', {
    visibility: "visible" });
  
  
  function sceneOne() {
    var tl = new TimelineMax();
  
    tl.add('begin');
    tl.to('#reel1', 1, {
      rotation: 360,
      repeat: 12,
      svgOrigin: '131.5 109',
      ease: Linear.easeNone },
    'begin');
    tl.to('#reel2', 3, {
      rotation: 360,
      repeat: 4,
      svgOrigin: '61 125',
      ease: Linear.easeNone },
    'begin');
    tl.from('body', 3, {
      backgroundColor: '#7f1710',
      ease: Sine.easeOut },
    'begin');
    tl.from('#bk', 3, {
      opacity: 0,
      ease: Sine.easeOut },
    'begin+=1');
    tl.from('.ribbon', 2, {
      opacity: 0,
      ease: Sine.easeOut },
    'begin+=5');
    tl.to('#projector', 3, {
      rotation: 3,
      repeat: 4,
      yoyo: true,
      svgOrigin: '90 218',
      ease: Bounce.easeInOut },
    'begin');
    tl.fromTo('#light', 3, {
      opacity: 0 },
    {
      opacity: 0.7,
      repeat: 4,
      yoyo: true,
      ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false }) },
    'begin');
    tl.fromTo('#lightcirc', 3, {
      opacity: 0 },
    {
      opacity: 1,
      ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false }) },
    'begin');
    tl.staggerFromTo('#textdark path', 3, {
      opacity: 0,
      scale: 0,
      rotation: -1000 },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      ease: Elastic.easeOut },
    0.1, 'begin+=2');
    tl.staggerFromTo('#textlight path', 3, {
      opacity: 0,
      scale: 0,
      rotation: -1000 },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      ease: Elastic.easeOut },
    0.1, 'begin+=2.25');
    tl.to('#film', 3, {
      morphSVG: { shape: "#film2" },
      repeat: 4,
      yoyo: true,
      ease: Bounce.easeInOut },
    'begin+=0.25');
  
    return tl;
  }
  
  var master = new TimelineMax();
  master.add(sceneOne(), "scene1");
  
  // create the player
  gsapPlayer({
    playerTL: master,
    bottom: '10px' });