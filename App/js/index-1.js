// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setLeft("20.571428571428573em")
                .setTop("18.285714285714285em")
                .setWidth("17.98095238095238em")
                .setLabelSize("6em")
                .setLabelCaption("User Name")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setLeft("20.571428571428573em")
                .setTop("20.571428571428573em")
                .setWidth("17.98095238095238em")
                .setLabelSize("6em")
                .setLabelCaption("Password")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button6")
                .setLeft("34.285714285714285em")
                .setTop("22.857142857142858em")
                .setWidth("4.266666666666667em")
                .setCaption("Login")
                .setValue("Login")
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image6")
                .setLeft("28.19047619047619em")
                .setTop("9.142857142857142em")
                .setWidth("5.6380952380952385em")
                .setHeight("5.6380952380952385em")
                .setSrc("{xui.ini.img_pic}")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});