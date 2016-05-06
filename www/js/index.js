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
    var grade = getGrade(finalPercentage);
    // To be modified as per the final range obtained above
    $('#finalgrade').text(grade);
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
        //localStorage.setItem('hScale', hScaleFac);
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
        //localStorage.setItem('lScale', lScaleFac);
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
       // localStorage.setItem('pScale', pScaleFac);
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
        //localStorage.setItem('prScale', prScaleFac);
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
       // localStorage.setItem('mScale', mScaleFac);
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
         fScale = fScaleFac;
        }
   };
   
   var checkScaleSettings = function()
   {
        if (hScale+lScale+pScale+prScale+mScale+fScale != 100) {
		    alert ("Scaling factors should add upto 100%. Restoring to default values.");
		    
		     hScale = 10.0;
             lScale = 40.0;
             pScale = 20.0;
             prScale = 10.0;
             mScale = 10.0;
             fScale = 10.0;
             $('#hScaleFactor').val(hScale)
             $('#lScaleFactor').val(lScale)
             $('#pScaleFactor').val(pScale)
             $('#prScaleFactor').val(prScale)
             $('#mScaleFactor').val(mScale)
             $('#fScaleFactor').val(fScale)
             
		    
	  } 
	  else 
	  { 
	    localStorage.setItem('hScale', hScale);
	    localStorage.setItem('lScale', lScale);
	    localStorage.setItem('pScale', pScale);
	    localStorage.setItem('prScale',prScale);
	    localStorage.setItem('mScale', mScale);
	    localStorage.setItem('fScale', fScale);
	  }
      
   };
 
var saveGradeRange = function()	{
	console.log("Inside saveGradeRange");
		//fetch the grade
		var aMin = parseFloat($('#aGradeMin').val());
		var aMax = parseFloat($('#aGradeMax').val());
		
		var bMin = parseFloat($('#bGradeMin').val());
		var bMax = parseFloat($('#bGradeMax').val());
		
		var cMin = parseFloat($('#cGradeMin').val());
		var cMax = parseFloat($('#cGradeMax').val());
		
		var dMin = parseFloat($('#dGradeMin').val());
		var dMax = parseFloat($('#dGradeMax').val());
		
		var fMin = parseFloat($('#fGradeMin').val());
		var fMax = parseFloat($('#fGradeMax').val());
		
		//check for overlap
		if(bMin >= aMax)
			alert("Overlap between A and B grades");
		if(cMin >= aMax)
			alert("Overlap between A and C grades");
		if(dMin >= aMax)
			alert("Overlap between A and D grades");
		if(fMin >= aMax)
			alert("Overlap between A and F grades");
		
		if(cMin >= bMax)
			alert("Overlap between B and C grades");
		if(dMin >= bMax)
			alert("Overlap between B and D grades");
		if(fMin >= bMax)
			alert("Overlap between B and F grades");

		if(dMin >= cMax)
			alert("Overlap between C and D grades");
		if(fMin >= cMax)
			alert("Overlap between C and F grades");

		if(fMin >= dMax)
			alert("Overlap between D and F grades");
		
		//Check for correctness
		if(aMin < bMin && aMax < bMax)	
			alert("Grade A should have Higher Percentage than Grade B");
		if(aMin < cMin && aMax < cMax)	
			alert("Grade A should have Higher Percentage than Grade C");
		if(aMin < dMin && aMax < dMax)	
			alert("Grade A should have Higher Percentage than Grade D");
		if(aMin < fMin && aMax < fMax)	
			alert("Grade A should have Higher Percentage than Grade F");
		
		if(bMin < cMin && bMax < cMax)	
			alert("Grade B should have Higher Percentage than Grade C");
		if(bMin < dMin && bMax < dMax)	
			alert("Grade B should have Higher Percentage than Grade D");
		if(bMin < fMin && bMax < fMax)	
			alert("Grade B should have Higher Percentage than Grade F");
		
		if(cMin < dMin && cMax < dMax)	
			alert("Grade C should have Higher Percentage than Grade D");
		if(cMin < fMin && cMax < fMax)	
			alert("Grade C should have Higher Percentage than Grade F");
				
		if(dMin < fMin && dMax < fMax)	
			alert("Grade D should have Higher Percentage than Grade F");
						
		//update the local storage
        localStorage.setItem('aMin', aMin);
		localStorage.setItem('aMax', aMax);

        localStorage.setItem('bMin', bMin);
		localStorage.setItem('bMax', bMax);

        localStorage.setItem('cMin', cMin);
		localStorage.setItem('cMax', cMax);

        localStorage.setItem('dMin', dMin);
		localStorage.setItem('dMax', dMax);

        localStorage.setItem('fMin', fMin);
		localStorage.setItem('fMax', fMax);
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
          checkScaleSettings();
		  saveGradeRange();
		  //alert(getGrade(91.0));
		 
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
 
var initializeGradeRange = function() {
	var aMax = localStorage.getItem('aMax');
	var aMin = localStorage.getItem('aMin');
	
	var bMax = localStorage.getItem('bMax');
	var bMin = localStorage.getItem('bMin');

	var cMax = localStorage.getItem('cMax');
	var cMin = localStorage.getItem('cMin');
	
	var dMax = localStorage.getItem('dMax');
	var dMin = localStorage.getItem('dMin');
	
	var fMax = localStorage.getItem('fMax');
	var fMin = localStorage.getItem('fMin');	
	
	$('#aGradeMax').val(aMax);
	$('#aGradeMin').val(aMin);

	$('#bGradeMax').val(bMax);
	$('#bGradeMin').val(bMin);

	$('#cGradeMax').val(cMax);
	$('#cGradeMin').val(cMin);

	$('#dGradeMax').val(dMax);
	$('#dGradeMin').val(dMin);

	$('#fGradeMax').val(fMax);
	$('#fGradeMin').val(fMin);
};
  
var getGrade = function(score)	{
	 var aMax = localStorage.getItem('aMax');
	 var aMin = localStorage.getItem('aMin');

	 var bMax = localStorage.getItem('bMax');
	 var bMin = localStorage.getItem('bMin');

	 var cMax = localStorage.getItem('cMax');
	 var cMin = localStorage.getItem('cMin');

	 var dMax = localStorage.getItem('dMax');
	 var dMin = localStorage.getItem('dMin');

	 var fMax = localStorage.getItem('fMax');
	 var fMin = localStorage.getItem('fMin');
	
	 if(score >= aMin && score <= aMax)	{
		 return "A";
	 }
	 if(score >= bMin && score <= bMax)	{
		 return "B";
	 }
	 if(score >= cMin && score <= cMax)	{
		 return "C";
	 }
	 if(score >= dMin && score <= dMax)	{
		 return "D";
	 }	 
	 if(score >= fMin && score <= fMax)	{
		 return "F";
	 }	 
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
				  initializeGradeRange();
				  
 });

 // Load plugin
 $( document ).on( "deviceready", function(){
                  StatusBar.overlaysWebView( false );
                  StatusBar.backgroundColorByName("gray");
                  });
 }

 
 )(jQuery);