props:Props are like passing arguments to the function.Props is wrapped into an
object.
-----------------------------------------------------------------
Config driven UI: Controlling the UI how the UI looks like using data/using config 
and the config comes from backend.Our UI is driven by the config.
------------------------------------------------------------------------
Importance of key:
When we pass key, react will optimise its render cycle. 
When we loop components at the same level over alot of things we need to pass uniqueID
because if some component comes at the first place and we have not given any Id to the
components then React will re-render all the components again .React will not know 
which component is new and will not be able to uniquely indentify components and 
React will re-render all the components.

If we give uniqueID to the components and if new components comes at first place then
React will only Render that component which has come new.Huge performance hit.

NOTE: Never use index as a key.But if key is not present that time we can use index
as key,but its not recommended.

not using keys(not acceptable) <<< index as key <<< uniqueID
