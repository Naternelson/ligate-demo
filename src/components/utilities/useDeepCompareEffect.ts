import { isEqual } from "lodash"
import { useEffect, useRef } from "react"

function useDeepCompareMemoize(value:any){
    const ref = useRef<any>()
    if(!isEqual(value, ref.current)) ref.current = value 
    return ref.current 
}

export function useDeepEffect(effect: React.EffectCallback, dependencies: React.DependencyList){
    useEffect(effect, dependencies.map(useDeepCompareMemoize))
}