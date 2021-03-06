const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'gsap', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'OpenCV',
    'GCP', 'MySQL', 'jQuery',
];
var tagCloud = TagCloud('.content', myTags,{

    // radius in px
    radius: 220,
  
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
  
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
  
    // interact with cursor move on mouse out
    keep: true
  
  }); 
