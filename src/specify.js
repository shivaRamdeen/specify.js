(function ( $ ) {
 
    $.fn.specify = function() {
        let trigger = this.data('trigger').trim();
        let destinationDomId = this.data('attachafterid').trim();
        let e = this;
        let IdOfDomToAttach = this.data('conditionaldomid');
        let domelement = $('#'+IdOfDomToAttach).clone().show();
        domelement.find(":input").each(function(){
        	$(this).prop('required',true);
        });
        this.change(function() {
        if($.trim(e.val()) === trigger)
        {   
            $('#'+destinationDomId).after(domelement);
        }
        else
        {
            domelement.remove();
        }
        
        });
        
        return this;
    };
 
}( jQuery ));