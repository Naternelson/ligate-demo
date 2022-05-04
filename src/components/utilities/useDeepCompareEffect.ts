import { isEqual } from "lodash"
import { useCallback, useEffect, useRef } from "react"

function useDeepCompareMemoize(value:any){
    const ref = useRef<any>()
    if(!isEqual(value, ref.current)) ref.current = value 
    return ref.current 
}

export function useDeepEffect(effect: React.EffectCallback, dependencies: React.DependencyList){
    useEffect(effect, dependencies.map(useDeepCompareMemoize))
}

export function useDeepCallback(cb:any, dependencies: React.DependencyList){
    return useCallback(cb, dependencies.map(useDeepCompareMemoize))
}