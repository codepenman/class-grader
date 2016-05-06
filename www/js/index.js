(function($) {
 "use strict";
 // h=homework, l=lab, p=project, pr=presentation, m=midterm, f=finals
 var hgApoint = 500.0;
 var lgApoint = 500.0;
 var pgApoint = 200.0;
 var prgApoint = 100.0;
 var mgApoint = 100.0;
 var fgApoint = 100.0;
 
 //Scaling factor
 var hScale = 10.0;
 var lScale = 40.0;
 var pScale = 20.0;
 var prScale = 10.0;
 var mScale = 10.0;
 var fScale = 10.0;
 
 //Default scores
 
 var scaledHomeworkScore = 0.0;
 var scaledLabScore = 0.0;
 var scaledProjectScore= 0.0;
 var scaledPresentationScore = 0.0;
 var scaledMidtermScore = 0.0;
 var scaledFinalScore = 0.0;
 var totalScore = 0.0;
 var finalPercentage=0.0;
 
 var computeHomeworkScore = function()
 {
    var homeWorkPoints= Number($('#hpoints').val());
    if (homeWorkPoints > hgApoint) 
    {
      alert("homework points you entered is greater than cutoff");
    }
    else 
    {
      scaledHomeworkScore = hScale*homeWorkPoints/100;
      
    }
  
 };
 
 var computeLabScore = function()
 {
    var labPoints= Number($('#lpoints').val());
    if (labPoints > lgApoint) 
    {
      alert("lab points you entered is greater than cutoff");
    }
    else 
    {
      scaledLabScore = lScale*labPoints/100;
    }
  
 };
 
  var computeProjectScore = function()
 {
    var projectPoints= Number($('#ppoints').val());
    if (projectPoints > pgApoint) 
    {
      alert("project points you entered is greater than cutoff");
    }
    else 
    {
      scaledProjectScore = pScale*projectPoints/100;
    }
  
 };
 
 var computePresentationScore = function()
 {
    var presentationPoints= Number($('#prpoints').val());
    if (presentationPoints > prgApoint) 
    {
      alert("presentation points you entered is greater than cutoff");
    }
    else 
    {
      scaledPresentationScore = prScale*presentationPoints/100;
    }
  
 };
 
 var computeMidtermScore = function()
 {
    var midtermPoints= Number($('#mpoints').val());
    if (midtermPoints > mgApoint) 
    {
      alert("midterm points you entered is greater than cutoff");
    }
    else 
    {
      scaledMidtermScore = mScale*midtermPoints/100;
    }
  
 };
 
  var computeFinalScore = function()
 {
    var finalPoints= Number($('#fpoints').val());
    if (finalPoints > fgApoint) 
    {
      alert("finals points you entered is greater than cutoff");
    }
    else 
    {
      scaledFinalScore = fScale*finalPoints/100;
    }
  
 };
 var computeGrade = function()
 {
    
    var currentGrade = "NA";
    computeHomeworkScore();
    computeLabScore();
    computeProjectScore();
    computePresentationScore();
    computeMidtermScore();
    computeFinalScore();
    totalScore=scaledHomeworkScore+scaledLabScore+scaledProjectScore+scaledPresentationScore+scaledMidtermScore+scaledFinalScore;
    alert("total score:"+totalScore);
    var totalCutOff =(hScale*hgApoint) + (lScale*lgApoint) + (pScale*pgApoint) + (prScale*prgApoint) + (mScale*mgApoint) + (fScale*fgApoint);
    totalCutOff=totalCutOff/100; 
    finalPercentage=(totalScore/totalCutOff)*100;
    alert("final percentage:"+finalPercentage);
    
    // To be modified as per the final range obtained above
    //$('#finalgrade').text(currentGrade);
 };
  var saveHomeworkSettings = function() 
  {      
       
        // homework cutoff
        var haPoint = parseFloat($('#hgradeCutOff').val());
        var hgradeCutOffSetting = localStorage.getItem('hgradeCutOff');
        if(haPoint != hgradeCutOffSetting) 
        {
        localStorage.setItem('hgradeCutOff', haPoint);
        hgApoint = haPoint;
        }
        
        //homework scale factor
        var hScaleFac = parseFloat( $('#hScaleFactor').val() );
        var hScaleSetting = localStorage.getItem('hScale');
        if(hScaleFac != hScaleSetting) 
        {
        localStorage.setItem('hScale', hScaleFac);
        hScale = hScaleFac;
        }
  };
   var saveLabSettings = function() 
   {
      // lab cutoff
        var laPoint = parseFloat( $('#lgradeCutOff').val() );
        var lgradeCutOffSetting = localStorage.getItem('lgradeCutOff');
        if(laPoint != lgradeCutOffSetting) 
        {
        localStorage.setItem('lgradeCutOff', laPoint);
        lgApoint = laPoint;
        }
        //lab scale factor
        var lScaleFac = parseFloat( $('#lScaleFactor').val() );
        var lScaleSetting = localStorage.getItem('lScale');
        if(lScaleFac != lScaleSetting) 
        {
        localStorage.setItem('lScale', lScaleFac);
        lScale = lScaleFac;
        }
   };
   
   var saveProjectSettings = function() 
   {
        // project cutoff
        var paPoint = parseFloat( $('#pgradeCutOff').val() );
        var pgradeCutOffSetting = localStorage.getItem('pgradeCutOff');
        if(paPoint != pgradeCutOffSetting) 
        {
        localStorage.setItem('pgradeCutOff', paPoint);
        pgApoint = paPoint;
        }
        //project scale factor
        var pScaleFac = parseFloat( $('#pScaleFactor').val() );
        var pScaleSetting = localStorage.getItem('pScale');
        if(pScaleFac != pScaleSetting) 
        {
        localStorage.setItem('pScale', pScaleFac);
        pScale = pScaleFac;
        }
   };
   
    var savePresentationSettings = function() 
   {
        // presentation cutoff
        var praPoint = parseFloat( $('#prgradeCutOff').val() );
        var prgradeCutOffSetting = localStorage.getItem('prgradeCutOff');
        if(praPoint != prgradeCutOffSetting) 
        {
        localStorage.setItem('prgradeCutOff', praPoint);
        prgApoint = praPoint;
        }
       
        //presentation scale factor
        var prScaleFac = parseFloat( $('#prScaleFactor').val() );
        var prScaleSetting = localStorage.getItem('prScale');
        if(prScaleFac != prScaleSetting) 
        {
        localStorage.setItem('prScale', prScaleFac);
        prScale = prScaleFac;
        }
   };
   
   
    var saveMidtermSettings = function() 
   {    
        // midterm cutoff
        var maPoint = parseFloat( $('#mgradeCutOff').val() );
        var mgradeCutOffSetting = localStorage.getItem('mgradeCutOff');
        if(maPoint != mgradeCutOffSetting) 
        {
        localStorage.setItem('mgradeCutOff', maPoint);
        mgApoint = maPoint;
        }
       
        //midterm scale factor
        var mScaleFac = parseFloat( $('#mScaleFactor').val() );
        var mScaleSetting = localStorage.getItem('mScale');
        if(mScaleFac != mScaleSetting) 
        {
        localStorage.setItem('mScale', mScaleFac);
        mScale = mScaleFac;
        }
   };
   
    var saveFinalSettings = function() 
    {    
        // finals cutoff
        var faPoint = parseFloat( $('#fgradeCutOff').val());
        var fgradeCutOffSetting = localStorage.getItem('fgradeCutOff');
        if(faPoint != fgradeCutOffSetting) 
        {
        localStorage.setItem('fgradeCutOff', faPoint);
        fgApoint = faPoint;
        }
        
        //finals scale factor
        var fScaleFac = parseFloat( $('#fScaleFactor').val() );
        var fScaleSetting = localStorage.getItem('fScale');
        if(fScaleFac != fScaleSetting) 
        {
        localStorage.setItem('fScale', fScaleFac);
        fScale = fScaleFac;
        }
   };
 
 var saveSettings = function()
 {
   
    try {
          saveHomeworkSettings();
          saveLabSettings();
          saveProjectSettings();
          savePresentationSettings();
          saveMidtermSettings();
          saveFinalSettings();
          $.mobile.pageContainer.pagecontainer("change", "#mainPage");
          //window.history.back();
    }
     catch (ex)
    {
        alert('Points must be a decimal value');
    }
 };
 

 var cancelSettings = function()
 {
    localStorage.clear();
 };

var initializeHomeWorkSettings = function()
{
                 //homework cutoff
                 var hgradeCutOffSetting = localStorage.getItem('hgradeCutOff');
                 if (hgradeCutOffSetting)
                  {
                    hgApoint = parseFloat(hgradeCutOffSetting);
                  }
                 $('#hgradeCutOff').val(hgApoint);
                 //homework scale
                 var hScaleSetting = localStorage.getItem('hScale');
                 if (hScaleSetting)
                  {
                    hScale = parseFloat(hScaleSetting);
                  }
                  $('#hScaleFactor').val(hScale);
                  


};

var initializeLabSettings = function()
{
                 //lab cutoff 
                 var lgradeCutOffSetting = localStorage.getItem('lgradeCutOff');
                 if (lgradeCutOffSetting)
                  {
                    lgApoint = parseFloat(lgradeCutOffSetting);
                  }
                 $('#lgradeCutOff').val(lgApoint);
                  
                  //lab scale
                 var lScaleSetting = localStorage.getItem('lScale');
                 if (lScaleSetting)
                  {
                    lScale = parseFloat(lScaleSetting);
                  }
                  $('#lScaleFactor').val(lScale);



};

var initializeProjectSettings = function()
{
                 //project cutoff 
                 var pgradeCutOffSetting = localStorage.getItem('pgradeCutOff');
                 if (pgradeCutOffSetting)
                  {
                    pgApoint = parseFloat(pgradeCutOffSetting);
                  }
                  
                  $('#pgradeCutOff').val(pgApoint);
                        
                //project scale
                 var pScaleSetting = localStorage.getItem('pScale');
                 if (pScaleSetting)
                  {
                    pScale = parseFloat(pScaleSetting);
                  }
                  
                  $('#pScaleFactor').val(pScale);



};

var initializePresentationSettings = function()
{
    
                 //presentation cutoff
                 var prgradeCutOffSetting = localStorage.getItem('prgradeCutOff');
                 if (prgradeCutOffSetting)
                  {
                    prgApoint = parseFloat(prgradeCutOffSetting);
                  }
                  
                  $('#prgradeCutOff').val(prgApoint);
                  
                 //presentation scale
                 var prScaleSetting = localStorage.getItem('prScale');
                 if (prScaleSetting)
                  {
                    prScale = parseFloat(prScaleSetting);
                  }
                  
                  $('#prScaleFactor').val(prScale);


};

var initializeMidtermSettings = function() {
                 //midterms 
                 var mgradeCutOffSetting = localStorage.getItem('mgradeCutOff');
                 if (mgradeCutOffSetting)
                  {
                    mgApoint = parseFloat(mgradeCutOffSetting);
                  }
                  
                  $('#mgradeCutOff').val(mgApoint);
                         //Midterm scale
                 var mScaleSetting = localStorage.getItem('mScale');
                 if (mScaleSetting)
                  {
                    mScale = parseFloat(mScaleSetting);
                  }
                  
                  $('#mScaleFactor').val(mScale);
};

var initializeFinalSettings = function() {
                   
                 
                 //final cutoff
                 var fgradeCutOffSetting = localStorage.getItem('fgradeCutOff');
                 if (fgradeCutOffSetting)
                  {
                    fgApoint = parseFloat(fgradeCutOffSetting);
                  }
                  
                  $('#fgradeCutOff').val(fgApoint);
                  
                //Final scale
                 var fScaleSetting = localStorage.getItem('fScale');
                 if (fScaleSetting)
                  {
                    fScale = parseFloat(fScaleSetting);
                  }
                  
                  $('#fScaleFactor').val(fScale);
};
 
 // Setup the event handlers
 $( document ).on( "ready", function()
                  {
                  $('#computeGrade').on('click', computeGrade);
                  $('#saveSettings').on('click', saveSettings);
                  $('#cancelSettings').on('click', cancelSettings);
                  initializeHomeWorkSettings();
                  initializeLabSettings();
                  initializeProjectSettings();
                  initializePresentationSettings();
                  initializeMidtermSettings();
                  initializeFinalSettings();
 });

 // Load plugin
 $( document ).on( "deviceready", function(){
                  StatusBar.overlaysWebView( false );
                  StatusBar.backgroundColorByName("gray");
                  });
 }

 
 )(jQuery);