export type GenderFilterType = "ALL" | "MALE"  | "FEMALE"
export type useDoctorsStoreType = { doctors: SingleDoctorType[] , filterType : GenderFilterType , searchResult : SingleDoctorType[] , searchedValue : string };
export type SingleDoctorType = { id: number, name: string, gender: 'MALE' | 'FEMALE'  , genderFa : 'خانم' |  'آقای' }
export type FilterType = "ODD" | "EVEN" | "ALL";
export type useNumbersFilterStoreType = { numbers: number[]; filterType: FilterType };

export type SingleFilterButtonType = {
  id: number;
  handler: () => void;
  label: string;
  type: FilterType;
};

export type SingleGenderType = { id: number, label: string| undefined, type: "ALL" |"MALE" | "FEMALE", handler: () => void }

type concated  = string | number | boolean |  null;
type concatedSafe = Exclude<concated , null>

