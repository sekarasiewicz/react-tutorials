type Animal = {
  name: string
}

type Human = {
  firstName: string
  lastName: string
}

type GetRequiredInformation<TType> = TType extends Animal ? { age: number } :
  TType extends Human ? { socialSecurityNumber: string } :
    TType extends { planet: string } ? { population: number } : never

export type RequiredInformationFromAnimal = GetRequiredInformation<Animal>
export type RequiredInformationFromHuman = GetRequiredInformation<Human>
export type RequiredInformationFromAlien = GetRequiredInformation<{ planet: string }>
