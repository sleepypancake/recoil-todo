import React, { useEffect } from 'react'
import { useRecoilCallback, useRecoilSnapshot } from 'recoil';


export function DebugButton(): React.Node {
    const onClick = useRecoilCallback(({snapshot}) => async () => {
      console.debug('Atom values:');
      for (const node of snapshot.getNodes_UNSTABLE()) {
        const value = await snapshot.getPromise(node);
        console.debug(node.key, value);
      }
    }, []);
  
    return <button onClick={onClick}>Dump State</button>
  }
