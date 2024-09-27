//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! <https://github.com/kinobi-so/kinobi>
//!

use solana_program::pubkey::Pubkey;
use borsh::BorshSerialize;
use borsh::BorshDeserialize;

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum RuleSetV1 {
None,
#[cfg_attr(feature = "serde", serde(with = "serde_with::As::<Vec<serde_with::DisplayFromStr>>"))]
ProgramAllowList(Vec<Pubkey>),
#[cfg_attr(feature = "serde", serde(with = "serde_with::As::<Vec<serde_with::DisplayFromStr>>"))]
ProgramDenyList(Vec<Pubkey>),
}

