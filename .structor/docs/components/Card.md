```
<Card>
  <CardHeader
    title="Title"
    subtitle="Subtitle"
    avatar={<Avatar>A</Avatar>}/>
  <CardHeader
    title="Demo Url Based Avatar"
    subtitle="Subtitle"
    avatar="http://lorempixel.com/100/100/nature/"/>
  <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
    <img src="http://lorempixel.com/600/337/nature/"/>
  </CardMedia>
  <CardTitle title="Title" subtitle="Subtitle"/>
  <CardActions>
    <FlatButton label="Action1"/>
    <FlatButton label="Action2"/>
  </CardActions>
  <CardText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
  </CardText>
</Card>
```

```
<Card initiallyExpanded={true}>
  <CardHeader
    title="Title"
    subtitle="Subtitle"
    avatar={<Avatar style={{color:'red'}}>A</Avatar>}
    showExpandableButton={true}>
  </CardHeader>
  <CardText expandable={true}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
  </CardText>
  <CardActions expandable={true}>
    <FlatButton label="Action1"/>
    <FlatButton label="Action2"/>
  </CardActions>
  <CardText expandable={true}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
  </CardText>
</Card>
```
----

##### A card is a piece of paper with unique related data that serves as an entry point to more detailed information. For example, a card could contain a photo, text, and a link about a single subject. Cards have a constant width and variable height. The maximum height is limited to the height of the available space on a platform, but it can temporarily expand (for example, to display a comment field). Cards do not flip over to reveal information on the back.

----

<div data-reactid=".0.$=12:0.0.0.1:3"><div style="font-size:15px;letter-spacing:0px;font-weight:400;line-height:24px;padding-top:0px;margin-bottom:13px;color:rgba(0, 0, 0, 0.87);width:100%;box-sizing:border-box;border-top:none;margin-top:0px;" data-reactid=".0.$=12:0.0.0.1:3.$0"><h3 style="font-size:20px;line-height:28px;padding-top:19px;margin-bottom:13px;letter-spacing:0px;font-weight:500;color:rgba(0, 0, 0, 0.87);box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$0.0">Card.Props</h3><table style="border-collapse:collapse;border-spacing:0px;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$0.1"><tbody data-reactid=".0.$=12:0.0.0.1:3.$0.1.0"><tr data-reactid=".0.$=12:0.0.0.1:3.$0.1.0.$0"><td style="padding: 16px 24px 16px 0px; vertical-align: top; position: inherit; font-weight: 500; box-sizing: border-box;" data-reactid=".0.$=12:0.0.0.1:3.$0.1.0.$0.0">initiallyExpanded</td><td style="padding: 16px 0px; vertical-align: top; width: 100%; border-bottom-style: none; box-sizing: border-box;" data-reactid=".0.$=12:0.0.0.1:3.$0.1.0.$0.1"><p style="margin:0px;font-size:15px;letter-spacing:0px;font-weight:400;line-height:24px;padding-top:0px;margin-bottom:13px;color:rgba(0, 0, 0, 0.87);width:100%;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$0.1.0.$0.1.0"><span style="color:rgba(0, 0, 0, 0.54);padding-right:24px;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$0.1.0.$0.1.0.0">bool</span><span data-reactid=".0.$=12:0.0.0.1:3.$0.1.0.$0.1.0.1">optional</span></p><p style="margin:0px;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$0.1.0.$0.1.1">Whether this card is initially expanded.</p></td></tr></tbody></table></div><div style="font-size:15px;letter-spacing:0px;font-weight:400;line-height:24px;padding-top:24px;margin-bottom:13px;color:rgba(0, 0, 0, 0.87);width:100%;box-sizing:border-box;border-top:solid 1px #e0e0e0;margin-top:24px;" data-reactid=".0.$=12:0.0.0.1:3.$1"><h3 style="font-size:20px;line-height:28px;padding-top:19px;margin-bottom:13px;letter-spacing:0px;font-weight:500;color:rgba(0, 0, 0, 0.87);box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.0">Props</h3><table style="border-collapse:collapse;border-spacing:0px;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.1"><tbody data-reactid=".0.$=12:0.0.0.1:3.$1.1.0"><tr data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$0"><td style="padding: 16px 24px 16px 0px; vertical-align: top; position: inherit; font-weight: 500; box-sizing: border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$0.0">expandable</td><td style="padding: 16px 0px; vertical-align: top; width: 100%; border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: rgb(224, 224, 224); box-sizing: border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$0.1"><p style="margin:0px;font-size:15px;letter-spacing:0px;font-weight:400;line-height:24px;padding-top:0px;margin-bottom:13px;color:rgba(0, 0, 0, 0.87);width:100%;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$0.1.0"><span style="color:rgba(0, 0, 0, 0.54);padding-right:24px;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$0.1.0.0">bool</span><span data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$0.1.0.1">optional</span></p><p style="margin:0px;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$0.1.1">Whether this card component is expandable. Can be set on any child of the Card component.</p></td></tr><tr data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$1"><td style="padding: 16px 24px 16px 0px; vertical-align: top; position: inherit; font-weight: 500; box-sizing: border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$1.0">showExpandableButton</td><td style="padding: 16px 0px; vertical-align: top; width: 100%; border-bottom-style: none; box-sizing: border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$1.1"><p style="margin:0px;font-size:15px;letter-spacing:0px;font-weight:400;line-height:24px;padding-top:0px;margin-bottom:13px;color:rgba(0, 0, 0, 0.87);width:100%;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$1.1.0"><span style="color:rgba(0, 0, 0, 0.54);padding-right:24px;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$1.1.0.0">bool</span><span data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$1.1.0.1">optional</span></p><p style="margin:0px;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$1.1.0.$1.1.1">Whether this card component include a button to expand the card. CardTitle, CardHeader and CardActions implement showExpandableButton. Any child component of Card can implements showExpandableButton or forwards the property to a child component supporting it.</p></td></tr></tbody></table></div><div style="font-size:15px;letter-spacing:0px;font-weight:400;line-height:24px;padding-top:24px;margin-bottom:13px;color:rgba(0, 0, 0, 0.87);width:100%;box-sizing:border-box;border-top:solid 1px #e0e0e0;margin-top:24px;" data-reactid=".0.$=12:0.0.0.1:3.$2"><h3 style="font-size:20px;line-height:28px;padding-top:19px;margin-bottom:13px;letter-spacing:0px;font-weight:500;color:rgba(0, 0, 0, 0.87);box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$2.0">Card.Events</h3><table style="border-collapse:collapse;border-spacing:0px;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$2.1"><tbody data-reactid=".0.$=12:0.0.0.1:3.$2.1.0"><tr data-reactid=".0.$=12:0.0.0.1:3.$2.1.0.$0"><td style="padding: 16px 24px 16px 0px; vertical-align: top; position: inherit; font-weight: 500; box-sizing: border-box;" data-reactid=".0.$=12:0.0.0.1:3.$2.1.0.$0.0">onExpandChange</td><td style="padding: 16px 0px; vertical-align: top; width: 100%; border-bottom-style: none; box-sizing: border-box;" data-reactid=".0.$=12:0.0.0.1:3.$2.1.0.$0.1"><p style="margin:0px;font-size:15px;letter-spacing:0px;font-weight:400;line-height:24px;padding-top:0px;margin-bottom:13px;color:rgba(0, 0, 0, 0.87);width:100%;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$2.1.0.$0.1.0"><span style="color:rgba(0, 0, 0, 0.54);padding-right:24px;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$2.1.0.$0.1.0.0">function(isExpanded)</span><span data-reactid=".0.$=12:0.0.0.1:3.$2.1.0.$0.1.0.1">optional</span></p><p style="margin:0px;box-sizing:border-box;" data-reactid=".0.$=12:0.0.0.1:3.$2.1.0.$0.1.1">Fired when the expandable state changes.</p></td></tr></tbody></table></div></div>
