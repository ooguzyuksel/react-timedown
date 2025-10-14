import{u as X,a as t,j as e}from"./Timedown-D6QZrfUC.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const Y=n=>{const{time:o,start:L,pause:N,resume:Q,reset:V,isRunning:h,isPaused:g,isCompleted:r}=X(n);return t("div",{style:{padding:"40px",fontFamily:"monospace",maxWidth:"600px",margin:"0 auto"},children:[e("div",{style:{fontSize:"72px",fontWeight:"bold",textAlign:"center",marginBottom:"40px",color:r?"#ef4444":"#000"},children:o.formatted}),t("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px",marginBottom:"30px",textAlign:"center"},children:[t("div",{children:[e("div",{style:{fontSize:"36px",fontWeight:"bold"},children:o.days}),e("div",{style:{fontSize:"14px",color:"#666"},children:"Days"})]}),t("div",{children:[e("div",{style:{fontSize:"36px",fontWeight:"bold"},children:o.hours}),e("div",{style:{fontSize:"14px",color:"#666"},children:"Hours"})]}),t("div",{children:[e("div",{style:{fontSize:"36px",fontWeight:"bold"},children:o.minutes}),e("div",{style:{fontSize:"14px",color:"#666"},children:"Minutes"})]}),t("div",{children:[e("div",{style:{fontSize:"36px",fontWeight:"bold"},children:o.seconds}),e("div",{style:{fontSize:"14px",color:"#666"},children:"Seconds"})]})]}),t("div",{style:{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap"},children:[!h&&!r&&e("button",{onClick:L,style:{padding:"12px 24px",fontSize:"16px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"600"},children:"Start"}),h&&e("button",{onClick:N,style:{padding:"12px 24px",fontSize:"16px",backgroundColor:"#f59e0b",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"600"},children:"Pause"}),g&&!r&&e("button",{onClick:Q,style:{padding:"12px 24px",fontSize:"16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"600"},children:"Resume"}),e("button",{onClick:()=>V(),style:{padding:"12px 24px",fontSize:"16px",backgroundColor:"#6b7280",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"600"},children:"Reset"})]}),t("div",{style:{marginTop:"30px",padding:"20px",backgroundColor:"#f3f4f6",borderRadius:"8px"},children:[e("h3",{style:{marginTop:0},children:"Status"}),t("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[t("div",{children:[e("strong",{children:"Running:"})," ",h?"✅":"❌"]}),t("div",{children:[e("strong",{children:"Paused:"})," ",g?"✅":"❌"]}),t("div",{children:[e("strong",{children:"Completed:"})," ",r?"✅":"❌"]})]})]})]})},ne={title:"Timedown/Hook Examples",component:Y,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{seconds:60,autoStart:!1},parameters:{docs:{description:{story:"Basic timedown starting from 60 seconds"}}}},a={args:{seconds:30,autoStart:!0},parameters:{docs:{description:{story:"Timedown that starts automatically"}}}},i={args:{minutes:5,autoStart:!1},parameters:{docs:{description:{story:"Timedown with minutes prop (5 minutes)"}}}},d={args:{duration:{hours:1,minutes:30,seconds:45},autoStart:!1},parameters:{docs:{description:{story:"Timedown initialized with duration object (1 hour, 30 minutes, 45 seconds)"}}}},c={args:{duration:{days:2,hours:5,minutes:30},format:"DD:HH:MM:SS",autoStart:!1},parameters:{docs:{description:{story:"Timedown with DD:HH:MM:SS format"}}}},m={args:{minutes:5,format:"MM:SS",autoStart:!1},parameters:{docs:{description:{story:"Simple MM:SS format timedown (5 minutes)"}}}},p={args:{seconds:10,autoStart:!1,onComplete:()=>{alert("Timedown completed!")},onTick:n=>{console.log("Current time:",n)}},parameters:{docs:{description:{story:"Timedown with onComplete and onTick callbacks (check console)"}}}},u={args:{until:new Date(Date.now()+12e4),autoStart:!1},parameters:{docs:{description:{story:"Timedown until a specific date (2 minutes from now)"}}}},l={args:{seconds:3665,format:"custom",customFormat:n=>`${n.hours}h ${n.minutes}m ${n.seconds}s`,autoStart:!1},parameters:{docs:{description:{story:"Timedown with custom format function"}}}},f={args:{hours:1,minutes:30,seconds:45,autoStart:!1},parameters:{docs:{description:{story:"Timedown with combined time unit props"}}}};var S,y,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    seconds: 60,
    autoStart: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic timedown starting from 60 seconds'
      }
    }
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,b,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    seconds: 30,
    autoStart: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown that starts automatically'
      }
    }
  }
}`,...(T=(b=a.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var C,v,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    minutes: 5,
    autoStart: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown with minutes prop (5 minutes)'
      }
    }
  }
}`,...(M=(v=i.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var k,D,W;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    duration: {
      hours: 1,
      minutes: 30,
      seconds: 45
    },
    autoStart: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown initialized with duration object (1 hour, 30 minutes, 45 seconds)'
      }
    }
  }
}`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var z,H,R;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    duration: {
      days: 2,
      hours: 5,
      minutes: 30
    },
    format: 'DD:HH:MM:SS',
    autoStart: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown with DD:HH:MM:SS format'
      }
    }
  }
}`,...(R=(H=c.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var F,j,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    minutes: 5,
    format: 'MM:SS',
    autoStart: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple MM:SS format timedown (5 minutes)'
      }
    }
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var $,A,U;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    seconds: 10,
    autoStart: false,
    onComplete: () => {
      alert('Timedown completed!');
    },
    onTick: (time: any) => {
      console.log('Current time:', time);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown with onComplete and onTick callbacks (check console)'
      }
    }
  }
}`,...(U=(A=p.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var P,E,_;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    until: new Date(Date.now() + 120000),
    // 2 minutes from now
    autoStart: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown until a specific date (2 minutes from now)'
      }
    }
  }
}`,...(_=(E=u.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var O,q,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    seconds: 3665,
    format: 'custom',
    customFormat: (time: any) => {
      return \`\${time.hours}h \${time.minutes}m \${time.seconds}s\`;
    },
    autoStart: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown with custom format function'
      }
    }
  }
}`,...(G=(q=l.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var I,J,K;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    hours: 1,
    minutes: 30,
    seconds: 45,
    autoStart: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown with combined time unit props'
      }
    }
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const oe=["BasicTimedown","AutoStart","WithMinutes","WithDuration","DifferentFormat","MinutesSeconds","WithCallbacks","UntilDate","CustomFormat","CombinedTimeUnits"];export{a as AutoStart,s as BasicTimedown,f as CombinedTimeUnits,l as CustomFormat,c as DifferentFormat,m as MinutesSeconds,u as UntilDate,p as WithCallbacks,d as WithDuration,i as WithMinutes,oe as __namedExportsOrder,ne as default};
