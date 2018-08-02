(function ( $ ) {
 
    $.fn.specify = function() {
        let trigger = this.data('trigger').trim();
        let e = this;
        let IdOfDomToAttach = this.data('conditionaldomid');
        let domelement = $('#'+IdOfDomToAttach).clone().show();
        this.change(function() {
        if($.trim(e.val()) === trigger)
        {   
            e.after(domelement);
        }
        else
        {
            domelement.remove();
        }
        
        });
        
        return this;
    };
 
}( jQuery ));